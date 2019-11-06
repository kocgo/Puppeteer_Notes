### Launch a browser, create a page
_Should be encapsulated inside of a async function since it is using `await`_
```js
async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
}()
```
