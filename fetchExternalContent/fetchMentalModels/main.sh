#!/bin/bash

node fetchExternalContent/fetchMentalModels/fetchDigitalGovtNzContent/fetchDigitalGovtNzContent.js

node fetchExternalContent/fetchMentalModels/fetchEssifLabContent/fetchEssifLabContent.js

node fetchExternalContent/fetchMentalModels/fetchNistContent/fetchNistContent.mjs

node fetchExternalContent/fetchMentalModels/fetchToIPContent/fetchToIPContent.js

node fetchExternalContent/fetchMentalModels/fetchToipDidWebs/fetchToipDidWebs.js

node fetchExternalContent/fetchMentalModels/fetchW3cDid/fetchW3cDid.js

# Combine glossaries
node fetchExternalContent/fetchMentalModels/combineGlossaries.js