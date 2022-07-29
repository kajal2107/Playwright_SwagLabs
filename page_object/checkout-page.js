const { expect } = require("chai");

exports.CheckoutPage = class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async addetails(fn,ln,pc) {
    await page.fill('#first-name',fn);
    await page.fill('#last-name', ln);
    await page.fill('#postal-code',pc);
  }

  async clickContinue(){
    await page.click('#continue');
  }

  async nextTitlePresent(){
    const title = await page.innerText(".title");
    return title
  }

}
