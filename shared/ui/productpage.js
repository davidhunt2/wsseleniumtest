var webdriver = require('selenium-webdriver');
var timeout = 10000;
var product = '.product-thumb';
 
ProductPage = function ProductPage(driver) {
    return this
    .driver = driver
    .url = 'http://www.williams-sonoma.com/shop/';
};
  
ProductPage.prototype.clickProduct = function() {
    var product = driver.findElement(By.class(product));
    return this
    .waitForVisible(product)
    .click(product);
};
 
module.exports = ProductPage;