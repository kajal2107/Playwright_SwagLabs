const { expect } = require("chai");

exports.ProductPage = class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async addProduct(item) {
    // var itemname = item.toLowerCase();
    // var name = itemname.replace(" ","-")
    // await this.page.click("#add-to-cart-"+ name);
    await this.page.click("#add-to-cart-sauce-labs-bike-light");
  }

  async clickShoppingCartLink(){
    await this.page.click('.shopping_cart_link')
  }

}

// class ProductPage {
//     // async searchProduct(item){
//     //     await page.fill('input[aria-label="Product search"]', item);
//     //     await Promise.all([
//     //         page.waitForNavigation({timeout:10000}),
//     //         page.click('button[aria-label="Search"]')
//     //     ]);
//     // }

//     // async productSearchSuccessful(item){
//     //     await page.$('text="'+item+'"');
//     // }

//     async addProduct(item){
//         // await page.click('text="'+item+'"');
//         await page.click('#add-to-cart-sauce-labs-bike-light')
//         // add-to-cart-sauce-labs-bike-light
//         // await page.click('text="Add to your basket"');
//         // await page.click('.MuiBadge-root .MuiSvgIcon-root path');
//     }

//     async productAddSuccessful(item){
//         await page.$('text="Proceed to checkout"');
//     }

//     async proceedToCheckOut(){
//         await page.click('text="Proceed to checkout"');
//     }
// }

// module.exports = { ProductPage };
