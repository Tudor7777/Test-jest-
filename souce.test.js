

const { chromium } = require('playwright');

  
describe('test on saucedemo', () => {
      jest.setTimeout('8000');
      let browser = null;
      let context = null;
      let page = null;


beforeAll(async() =>{ 
    
    browser = await chromium.launch({
    headless: false,
    slowMo:100
    });

    context = await browser.newContext();

    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});

  it('Should be able to login', async() => {
    
      await page.locator('[data-test="username"]').fill('standard_user');
   
      await page.locator('[data-test="password"]').fill('secret_sauce');
  
      await page.locator('[data-test="login-button"]').click();
  });


  it('Should be able filter products', async() => {
  
      await page.waitForURL('https://www.saucedemo.com/inventory.html');

      await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
      await page.locator('[data-test="product_sort_container"]').selectOption('za');
      await page.locator('#item_0_img_link').click();
      await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=0');
      await page.locator('[data-test="back-to-products"]').click();
      await page.waitForURL('https://www.saucedemo.com/inventory.html');
      await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
      await page.locator('[data-test="product_sort_container"]').selectOption('za');
      await page.locator('#item_4_img_link').click();
      await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=4');
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('a:has-text("1")').click();
      await page.waitForURL('https://www.saucedemo.com/cart.html');
      await page.locator('#cart_contents_container').getByText('1').click();
      await page.locator('[data-test="continue-shopping"]').click();
      await page.waitForURL('https://www.saucedemo.com/inventory.html');
      await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      await page.locator('a:has-text("2")').click();
      await page.waitForURL('https://www.saucedemo.com/cart.html');
      await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
      await page.locator('[data-test="checkout"]').click();
      await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
      
      await page.locator('[data-test="firstName"]').click();
      await page.locator('[data-test="firstName"]').fill('ggg');
      await page.locator('[data-test="lastName"]').click();
      await page.locator('[data-test="lastName"]').fill('gggg');
      await page.locator('[data-test="postalCode"]').click();
      await page.locator('[data-test="postalCode"]').fill('uuu');
      await page.locator('[data-test="continue"]').click();
      await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
      await page.locator('[data-test="finish"]').click();
      await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');
      await page.locator("[data-test='back-to-products']").click();
      await page.waitForURL('https://www.saucedemo.com/inventory.html');

      await page.waitForTimeout(1500); //fix me remove

});

afterAll(async() =>{ 
      await page.close();
      await context.close();
      await browser.close();
});

});
    
