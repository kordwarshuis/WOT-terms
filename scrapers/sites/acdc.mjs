import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'querySelector',
        sourcePath: 'https://github.com/trustoverip/acdc/wiki',
        queryString: '#wiki-pages-box a',
    }),
    siteName: 'Trust over IP glossary',
    destinationFile: 'scrapers/output/acdc.json',
    domQueryForContent: '.markdown-body p, .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body li'
}

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle;
    pageTitle = await page.$eval('.repository-content h1', (element) => {
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