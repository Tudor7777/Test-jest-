
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demoqa.com/');
  await page.locator('.card').first().click();
  await page.waitForURL('https://demoqa.com/elements');
  await page.locator('span:has-text("Forms") div').first().click();
  await page.getByText('Alerts, Frame & Windows').click();
  await page.locator('span:has-text("Widgets") div').first().click();
  await page.locator('span:has-text("Interactions") div').first().click();
  await page.locator('li:has-text("Sortable")').click();
  await page.waitForURL('https://demoqa.com/sortable');
  await page.locator('li:has-text("Selectable")').click();
  await page.waitForURL('https://demoqa.com/selectable');
  await page.locator('li:has-text("Resizable")').click();
  await page.waitForURL('https://demoqa.com/resizable');
  await page.locator('li:has-text("Droppable")').click();
  await page.waitForURL('https://demoqa.com/droppable');
  await page.locator('li:has-text("Dragabble")').click();
  await page.waitForURL('https://demoqa.com/dragabble');
  await page.getByRole('tab', { name: 'Axis Restricted' }).click();
  await page.getByRole('tab', { name: 'Container Restricted' }).click();
  await page.getByRole('tab', { name: 'Cursor Style' }).click();
  await page.locator('span:has-text("Forms") div').first().click();
  await page.locator('li:has-text("Practice Form")').click();
  await page.waitForURL('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('vbgnvgngfvn');
  await page.getByText('Male').nth(1).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('fghbgf');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('option', { name: 'Choose Monday, April 10th, 2023' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('ghbgf');
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  // ---------------------
  await context.close();
  await browser.close();
})();