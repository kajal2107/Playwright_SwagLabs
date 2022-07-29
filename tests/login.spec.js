const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
const {newTest} = require('../fixtures/login.js')
const { ProductPage } = require('../page_object/product-page.js');
// newTest('mytest', async ({login}) => {
//   //test logic
//   login.goto(''); // using login here since I pass it as page in the fixture.
// })
test.describe('Sauce_Lab', () => {

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });


  test.afterAll(async () => {
    await page.close();
  });

  test('SuccessFull Login with Valid Credentials ', async ({ page }) => {
    const productpage = new ProductPage(page);
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name',"standard_user");
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button')
    await expect(page.locator('.title')).toHaveText('Products');
    // Assertions use the expect API.
    // await page.goto('https://www.duckduckgo.com');
    // const element = await page.$('[name="q"]');
    // await element.click();
    // await element.type('BrowserStack');
    // await element.press('Enter');
    // const title = await page.title('');
    // console.log(title);
    // expect(title).toEqual( 'BrowserStack at DuckDuckGo', 'Expected page title is incorrect!');
  });

  test('login Failed',async({page})=>{
    // await page.waitForSelector('[class="error-message-container error"]');
    // let error = await page.$eval('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]', (errortext) => errortext.textContent);
    // expect (error).to.include("Epic sadface: Username is required")
  })
});
