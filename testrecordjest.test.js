const { chromium } = require('playwright');

describe('test on testrecordjest', () => {
    jest.setTimeout('10000');
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

  await page.goto('https://demoqa.com/');

    }); 

    it('Should be able to navigate', async() => {

  await page.getByRole('heading', { name: 'Book Store Application' }).click();
  await page.waitForURL('https://demoqa.com/books');

  await page.getByRole('link', { name: 'Speaking JavaScript' }).click();
  await page.waitForURL('https://demoqa.com/books?book=9781449365035');

  await page.getByRole('button', { name: 'Back To Book Store' }).click();
  await page.waitForURL('https://demoqa.com/books');

    });

    it('Should be able to navigate', async() => {


  await page.getByText('Elements').click();

  await page.getByRole('link', { name: 'Learning JavaScript Design Patterns' }).click();
  await page.waitForURL('https://demoqa.com/books?book=9781449331818');

});

afterAll(async() =>{ 
  await page.close();
  await context.close();
  await browser.close();
});


});




