const puppeteer = require('puppeteer');
const selectorStyler = require('./selectorStyler');

// ------ROBOT START------
(async () => {

    const browser = await puppeteer.launch({headless: false , devtools: true});
    const page = await browser.newPage();
    await page.goto('https://motherfuckingwebsite.com');

    // SELECTOR = LIST SELECTOR WITH EVALUATE
    const myList = await page.evaluate( ( selector, selectorStyler ) => {
        // RETURN SELECTED ITEMS AS LIST
        return Array.from(document.querySelectorAll(selector), e => e );
    }, selector = "body > ul > li" , selectorName="product_name", selectorStyler )
    .then( selectorStyler.bind({page, selector, selectorName}) )
    .catch(err => err);


    // SELECTOR = SKU
    const sku = await page.evaluate( ( selector, selectorStyler ) => {
        // RETURN SELECTED ITEMS AS LIST
        return Array.from(document.querySelectorAll(selector), e => e );
    }, selector = "body > header > h1" , selectorName="sku", selectorStyler )
    .then( selectorStyler.bind({page, selector, selectorName}) )
    .catch(err => err);


    // SELECTOR = ADDITIONAL INFO
    const additional_info = await page.evaluate( ( selector, selectorStyler ) => {
        // RETURN SELECTED ITEMS AS LIST
        return Array.from(document.querySelectorAll(selector), e => e );
    }, selector = "body > p:nth-child(6)" , selectorName="additional_info", selectorStyler )
    .then( selectorStyler.bind({page, selector, selectorName}) )
    .catch(err => err);
})();