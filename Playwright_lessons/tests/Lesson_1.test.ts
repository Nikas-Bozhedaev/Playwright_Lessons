import { test, expect } from '@playwright/test';

// test('Переход в Оформление заказа', async ({ page }) => {
  //await page.goto('https://stagespa.dev.baucenter.ru/');
  
  // Локатор по ID
  //await page.locator('#switch-website-version-yes').click();

  // Локатор по Роли
  //await page.getByRole('button', { name: 'Каталог', exact: true }).waitFor();
  //await page.getByRole('button', { name: 'Каталог', exact: true }).click();

  // Локатор по CSS
  //await page.waitForSelector('.styled__CatalogMenuSectionLink-sc-7urjdy-2.gvNyEO', {state: 'visible'});
  //await page.locator('.styled__CatalogMenuSectionLink-sc-7urjdy-2.gvNyEO', {hasText: 'Сад'}).nth(0).hover();

  // Локатор по XPath
  //await page.locator("//*[contains(@class,'Typography__StyledElement-sc-4c67ma-0') and contains(@class, 'dxIXDa') and contains(@class, 'styled__CategoryTitle-sc-7urjdy-3') and contains(@class,'hDtYlE')]", {hasText: 'Консервирование, виноделие и хранение урожая'}).hover();

  // Дальше любой локатор :)
  //await page.getByRole('link', { name: 'Банки, крышки для консервирования', exact: true }).click();
//});

test('(АЗ, ФЛ) Корзина. Действия в корзине - удалить товар', async ({ page }) => {
// Предусловие: в Корзину добавлено 3 и более товаров НАДО МОК НАПИСАТЬ
  test.setTimeout(36000);
  await page.goto('https://stagespa.dev.baucenter.ru/');
  await page.mouse.wheel(0, 1500);
  
  await page.getByRole('button', {name: 'В корзину', exact: true}).first().click();
  await page.getByRole('button', {name: 'В корзину', exact: true}).nth(1).click();
  await page.getByRole('button', {name: 'В корзину', exact: true}).nth(2).click();
  await page.locator('.styled__IconElement-sc-1d8whwz-0.buhLEM.styled__HeaderIcon-sc-7bmhlb-0.iDpUTx', {hasText: '₽'}).click();

//Тап на иконку "Удалить" у товара 
  await page.locator('.styled__Flex-sc-1xnb32p-0 > div > button:nth-child(2)').first().click();
// Окно подтверждения удаления товара
  await page.getByText('Удалить товар?').isVisible();
//Тап на кнопку "Удалить"
  await page.getByRole('button', {name: 'Удалить', exact: true}).click();
// Товар удален

//Тап на кнопку "Очистить корзину"
  await page.getByRole('button', {name: 'Очистить корзину', exact: true}).click();
//Откроется окно "Очистить корзину?"
  await page.getByText('Очистить корзину?').first().isVisible();
//Тап на кнопку "Да, очистить"
  await page.getByRole('button', {name: 'Да, очистить', exact: true}).click();
// Корзина очищена
  await page.getByText('Корзина пуста').isVisible();
});