import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://weboftrust.github.io/WOT-terms/sitemap.xml',
    }),
    siteName: 'KERISSE (this site)',
    destinationFile: 'scrapers/output/WOT-terms.json',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown li'
}

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let type = await page.$eval('article', (element) => {
        switch (element.getAttribute('data-type')) {
            case 'G':
                return 'General';
            case 'S':
                return 'SSI';
            case 'K':
                return 'KERI/ACDC specific';
        }
    });

    // Find the breadcrumbs element and all its child <li> elements
    let hierarchyLevels = await page.$$eval('.breadcrumbs__link', (nodes) =>
        nodes.map((node) => node.textContent.trim())
    );

    // Get the value of the data-level attribute from the article element
    let knowledgeLevel = await page.$eval('article', (element) => {
        return element.getAttribute('data-level');
    });

    let pageTitle = await page.$eval('article header h1', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = mainContent;
    all.type = type;
    all.hierarchyLevel0 = hierarchyLevels[0];
    all.hierarchyLevel1 = hierarchyLevels[1];
    all.hierarchyLevel2 = hierarchyLevels[2];
    all.hierarchyLevel3 = hierarchyLevels[3];
    all.knowledgeLevel = knowledgeLevel;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};