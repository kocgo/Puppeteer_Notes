### Launch a browser, create a page
_Should be encapsulated inside of a async function since it is using `await`_
```js
async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
}()
```

### Using Puppeteer with Jest for testing
_Install Jest and Puppeteer_  
_Set an npm script = {"test" : "jest"}_  
_Create a `tests` folder with a `xxxx.test.js` file inside_  
_`npm run tests` command will run these test files with Jest_  
```js
// myPuppeteerTesting.test.js
test('Testing a browser launch', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('www.gokhankoc.pl');
});
```
