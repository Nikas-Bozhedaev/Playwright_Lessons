import { test, expect } from '@playwright/test';

test('Переход в Оформление заказа', async ({ page }) => {
  await page.goto('https://stagespa.dev.baucenter.ru/');
  
  // Локатор по ID
  await page.locator('#switch-website-version-yes').click();

  // Локатор по Роли
  await page.getByRole('button', { name: 'Каталог', exact: true }).waitFor();
  await page.getByRole('button', { name: 'Каталог', exact: true }).click();

  // Локатор по CSS
  await page.waitForSelector('.styled__CatalogMenuSectionLink-sc-7urjdy-2.gvNyEO', {state: 'visible'});
  await page.locator('.styled__CatalogMenuSectionLink-sc-7urjdy-2.gvNyEO', {hasText: 'Сад'}).nth(0).hover();

  // Локатор по XPath
  await page.locator("//*[contains(@class,'Typography__StyledElement-sc-4c67ma-0') and contains(@class, 'dxIXDa') and contains(@class, 'styled__CategoryTitle-sc-7urjdy-3') and contains(@class,'hDtYlE')]", {hasText: 'Консервирование, виноделие и хранение урожая'}).hover();

  // Дальше любой локатор :)
  await page.getByRole('link', { name: 'Банки, крышки для консервирования', exact: true }).click();
});