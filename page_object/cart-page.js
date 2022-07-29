const { expect } = require("chai");

exports.CartPage = class CartPage {
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

  async titlePreseent() {
    const title = await page.innerText(".title");
    return title
  }

  async clickShoppingCartLink(){
    await this.page.click('.shopping_cart_link')
  }

  async clickCheckOutButton(){
    await this.page.click('#checkout')
  }
}