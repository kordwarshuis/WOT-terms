import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-medium.com.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'scrapers/output/medium.com.json',
    domQueryForContent: '.ch p'
}


console.log("config.sitemap");
console.log(config.sitemap);

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.ch h1', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};