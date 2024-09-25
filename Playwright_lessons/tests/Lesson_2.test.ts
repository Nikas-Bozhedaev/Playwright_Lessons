import { test, expect } from '@playwright/test';

  // TODO Дописать тест и разнести экран и методы по файлам
  test('(АЗ) Корзина. Действия в корзине - массовый перенос в список покупок', async ({ page }) => {
    //Предусловие: в Корзину добавлено 5 товаров, массовый перенос в список покупок
  
    // Тап на чекбокс у первого товара
    // Чекбокс выбирается
  
    // Тап на чекбокс у второго товара
    // Чекбокс выбирается
  
    // Тап на кнопку "В список"
    // Откроется окно"Перенос товара в список"
  
    // Тап на кнопку "Перенести" в окне выбора списка покупок
    // Товар переносится в список покупок, снек об успехе переноса, в корзине остается 3 товара
  
    // Тап по чекбоксу "Выбрать все"
    // Чекбокс выбирается у всех товаров
  
    // Тап на кнопку "В список"
    // Откроется окно "Перенос товара в список"
  
    // Тап на кнопку "Перенести" в окне выбора списка покупок
    // Корзина пуста, снек о переносе товаров в список покупок, товары переносятся в список покупок
    });

    export const cookies = [
        { name: 'experimental', value: '1', domain: 'stagespa.dev.baucenter.ru', path: '/' },
        { name: 'authorization', value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwZDBiZDFlZS03YjI0LTExZWYtYmIzMy02Mjg1ODgzZTJhZjEiLCJsb2MiOjExMDAwMDAwMzcsImV4cCI6MTcyOTg1MDM1OSwicm9sZSI6InByb2ZpIiwic3ViIjoyMDUwMTczLCJ0ZWwiOiI3OTAwMDAwMTAwMCIsImxjaSI6IjM5MjE2MDMzMzQiLCJsY3QiOiJwcm9maSJ9.mq7ZPh31PKpDeO56azsdsBrHywuXJYB203m_XqS0ieQ', domain: 'stagespa.dev.baucenter.ru', path: '/' }
    ];
    // TODO Дописать тест и разнести экран и методы по файлам
  test('(АЗ, ЮЛ) Корзина. Действия в корзине - выбрать карту Профи', async ({ page }) => {
    await page.goto('https://stagespa.dev.baucenter.ru/personal/cart/')
    // Предусловие: в Корзину добавлен товар, есть карта Профи
  
    // Тап на выпадающий список "Выберите карту"
    await page.locator('.styled__SelectorItem-sc-1kcbo2d-8.ljjxnq').click();
    // Откроется список карт
    
    // Тап на карту Профи
    await page.getByText('ООО "Металлист').click();
    // Применилась карта с тостом успеха. Отобразить товар со скидкой, без бонусов.
    await page.locator('Typography__StyledElement-sc-4c67ma-0.bhQwUD.styled__BasePrice-sc-n607s0-3.dxrEmR').isVisible();
    });