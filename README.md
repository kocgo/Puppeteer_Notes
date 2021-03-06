### Main Documentation
[API Docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)


### Launch a browser, create a page
_Should be encapsulated inside of a async function since it is using `await`_
```js
async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
}()
```

### Terminate Browser
```js
await browser.close();
```

### Using Puppeteer with Jest for testing
* _Install Jest and Puppeteer_  
* _Set an npm script = {"test" : "jest"}_  
* _Create a `tests` folder with a `xxxx.test.js` file inside_  
* _`npm run tests` command will run these test files with Jest_  
```js
// myPuppeteerTesting.test.js
test('Testing a browser launch', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('www.gokhankoc.pl');
});
```

### Simple Use of $eval (How it works?)
* _Callback function `el => el.innerHTML` gets serialized (transformed into text) and being sent to browser_  
* _Runs `$` Selector function in the browser with the given Css Selector_  
* _Browser executes `$('a.brand-logo)` then `el => el.innerHTML`_
```js
const text = await page.$eval('a.brand-logo, el => el.innerHTML);

/* For testing */
expect(text).toEqual("This string is expected");
```

### Waiting
* _Wait for Selector/Function/Timeout_ 
* _Arguments = Selector, {Options}, [args]_  
```js
await page.waitFor('a[href="/auth/logout"]', {timeout: 480000} );
```

### Click an element
```js
await page.click('.mydiv a');
```

### Retrieving Page URL
```js
const url = await page.url();

// Testing with Regex
expect(url).toMatch(/accounts\.google\.com/);
```

### Manipulating Cookies
```js
await page.setCookie({ name : "username", value: "gokhan" });
```
