const { expect } = require("chai");

exports.CheckoutOverviewPage = class CheckoutOverviewPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async itemPresent() {
    const itemname = await page.innerText("#item_4_title_link .inventory_item_name");
    return itemname
  }

  async clickFinishButton(){
    await this.page.click('#finish')
  }
}