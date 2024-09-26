import { test, expect } from '@playwright/test';
export const cookies = [
  { name: 'experimental', value: '1', domain: 'stagespa.dev.baucenter.ru', path: '/' },
  { name: 'authorization', value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMGFhMTdhYy03YzBmLTExZWYtOTJiYi0wMjQyOWI1ZTgxNmYiLCJsb2MiOjExMDA0NjgxODIsImV4cCI6MTcyOTk1MTk2MCwicm9sZSI6InByb2ZpIiwic3ViIjoyMDUwMTczLCJ0ZWwiOiI3OTAwMDAwMTAwMCIsImxjaSI6IjM5MDA1NzQxOTYiLCJsY3QiOiJ3b3JrZXIifQ.LdoEOpwGLz_gyjEoo8qj_ofG3NQZiAox8c-Uv4TB9FM', domain: 'stagespa.dev.baucenter.ru', path: '/' }
];
// TODO Дописать тест и разнести экран и методы по файлам
test('(АЗ, ЮЛ) Корзина. Действия в корзине - выбрать карту Профи', async ({ page, context }) => {
  await context.addCookies(cookies);
  await page.goto('https://stagespa.dev.baucenter.ru/personal/cart/')
  // Предусловие: в Корзину добавлен товар, есть карта Профи
  
  // Тап на выпадающий список "Выберите карту"
  await page.locator('.styled__SelectorItem-sc-1kcbo2d-8.ljjxnq').nth(0).click();
  // Откроется список карт
    
  // Тап на карту Профи
  await page.getByText('ООО "Металлист').click();
  // Применилась карта с тостом успеха. Отобразить товар со скидкой, без бонусов.
  await page.locator('Typography__StyledElement-sc-4c67ma-0.bhQwUD.styled__BasePrice-sc-n607s0-3.dxrEmR').isVisible();
});

test('(АЗ) Корзина. Действия в корзине - массовый перенос в список покупок', async ({ page }) => {
  //Предусловие: в Корзину добавлено 5 товаров, массовый перенос в список покупок
  await page.goto('https://stagespa.dev.baucenter.ru/personal/cart/')
  // Тап на чекбокс у первого товара
  await page.locator('.styled__Checkbox-sc-18x3nlp-2.hLnzTG.styled__Checkbox-sc-16fp8a8-9.bCZmRO').first().click();
  // Чекбокс выбирается
  // Тап на чекбокс у второго товара
  await page.locator('.styled__Checkbox-sc-18x3nlp-2.hLnzTG.styled__Checkbox-sc-16fp8a8-9.bCZmRO').nth(1).click();
  // Чекбокс выбирается
  
  // Тап на кнопку "В список"
  await page.getByRole('button', {name: 'В список', exact: true}).click();
  // Откроется окно"Перенос товара в список"
  
  // Тап на кнопку "Перенести" в окне выбора списка покупок
  await page.getByRole('button', {name: 'Перенести', exact: true}).click();
  // Товар переносится в список покупок, снек об успехе переноса, в корзине остается 3 товара
  
  // Тап по чекбоксу "Выбрать все"
  await page.locator('.styled__CheckMark-sc-18x3nlp-1.wnHPc').click();
  // Чекбокс выбирается у всех товаров
  
  // Тап на кнопку "В список"
  await page.getByRole('button', {name: 'В список', exact: true}).click();
  // Откроется окно "Перенос товара в список"
  
  // Тап на кнопку "Перенести" в окне выбора списка покупок
  await page.getByRole('button', {name: 'Перенести', exact: true}).click();
  // Корзина пуста, снек о переносе товаров в список покупок, товары переносятся в список покупок

});