var webdriver = require('selenium-webdriver');
var timeout = 10000;
var saveLink = '.moveToSFL';
var productNameText = '.cart-table-row-title';
var saveForLaterHeader = driver.findElement(By.class('.save-for-later'));
 
CheckoutPage = function CheckoutPage(driver) {
    return this
    .driver = driver
    .url = 'https://secure.williams-sonoma.com/shoppingcart/';
};
  
CheckoutPage.prototype.saveForLater = function() {
    var saveLinkProduct = driver.findElement(By.class(saveLink));
    return this
    .waitForVisible(saveLinkProduct)
    .click(saveLinkProduct)
    .driver.findElement(By.class(productNameText));
};

CheckoutPage.prototype.saveForLaterProduct = function() {
    return this
    .waitForVisible(saveForLater)
    .driver.findElement(By.class(productNameText));
};
 
module.exports = CheckoutPage;