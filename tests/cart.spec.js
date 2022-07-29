const { test } = require("../fixtures");
const { expect } = require("@playwright/test");
const { newTest } = require("../fixtures/login.js");
const { ProductPage } = require("../page_object/product-page.js");
const { CartPage } = require("../page_object/cart-page.js");

test.describe("Sauce_Lab", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Verify added item is present in cart", async ({ page }) => {
    try {
      const productpage = new ProductPage(page);
      const cartpage = new CartPage(page);
      await page.goto("https://www.saucedemo.com/");
      await page.fill("#user-name", "standard_user");
      await page.fill("#password", "secret_sauce");
      await page.click("#login-button");
      await expect(page.locator(".title")).toHaveText("Products");

      // Cart Count
      await productpage.addProduct("Sauce Labs Backpack");
      expect(await page.innerText(".shopping_cart_badge")).toBe("1");

      //Click on Cart Button
      await cartpage.clickShoppingCartLink();

      //Verify Item is present
      expect(await page.innerText(".cart_item_label a div")).toBe("Sauce Labs Bike Light")

      //Click On checkout button
      await cartpage.clickCheckOutButton();
      await expect(page.locator(".title")).toHaveText("Checkout: Your Information")


    } catch (err) {
      console.log("Closed the browser");
      await browser.close();
    }
  });

});
