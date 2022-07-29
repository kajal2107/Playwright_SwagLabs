complete-header
const { expect } = require("chai");

exports.CompletePage = class CompletePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async completeTitle() {
    expect(await page.innerText(".complete-header")).toBe("THANK YOU FOR YOUR ORDER");
  }

}