#!/bin/bash

# File: import.sh
# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script imports JSONL files into a Typesense collection (typesense.org).
# Instructions: In order to run this script, you need to have a .env file in the root of the project with the following variables:
#   TYPESENSE_ADMIN_API_KEY
#   TYPESENSE_HOST
#   TYPESENSE_COLLECTION_NAME


# Find out if the script is running in GitHub Actions or locally
# Via Github actions is not working yet. 
if [[ -n "$GITHUB_ACTIONS" ]]; then
  # Running in GitHub Actions
  local_TYPESENSE_ADMIN_API_KEY="{{ secrets.TYPESENSE_ADMIN_API_KEY }}"
  local_TYPESENSE_HOST="{{ secrets.TYPESENSE_HOST }}"
  local_TYPESENSE_COLLECTION_NAME="{{ secrets.TYPESENSE_COLLECTION_NAME }}"
else
  # Running locally with .env file
  source "$(pwd)/.env"
  local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
  local_TYPESENSE_HOST="${TYPESENSE_HOST}"
  local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"
fi

# Use the `local_TYPESENSE_ADMIN_API_KEY`, `local_TYPESENSE_HOST`, and `local_TYPESENSE_COLLECTION_NAME` variables anywhere in the script as needed

echo "local_TYPESENSE_COLLECTION_NAME:"
echo $local_TYPESENSE_COLLECTION_NAME


############## CONFIGURATION ##############
# URL of the endpoint to empty the collection
# explanation: the filter_by parameter is used to delete all documents that have a content field that is not empty
urlDelete="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents?filter_by=content:!=''"

# URL of the endpoint to import documents
urlImport="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/import?action=create"


############## CONVERT JSON TO JSONL ##############
input_dir="$(pwd)/scrapers/output"
output_dir="$(pwd)/scrapers/output"


# Create the output directory if it doesn't exist
# mkdir -p "$output_dir"

# Loop through all .json files in the input directory
for file in "$input_dir"/*.json; do
    # Get the file name without extension
    filename=$(basename "$file" .json)
    # Convert the file to .jsonl format using jq
    jq -c '.[]' "$file" > "$output_dir/$filename.jsonl"
done


############## MAKE COLLECTION EMPTY ##############
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" -X DELETE $urlDelete


############## IMPORT JSONL FILES ##############
# Iterate over each JSONL file in the directory
for file in "$output_dir"/*.jsonl; do
    # Check if the file exists and is a regular file
    if [[ -f "$file" ]]; then
        echo "Importing file: $file"
        
        # Extract the filename without extension
        filename=$(basename "$file" .jsonl)
        
        # Execute the cURL command to import the document
        curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
              -X POST \
              -T "$file" \
              --http1.1 \
              "$urlImport"
        
        echo "Import completed for file: $file"
        echo "-------------------------"
    fi
done
