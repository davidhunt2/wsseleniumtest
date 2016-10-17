var webdriver = require('selenium-webdriver');
var timeout = 10000;
var addButton = '.add-to-basket';
var checkoutButton = '#btn-checkout';
 
ProductDetailPage = function ProductDetailPage(driver) {
    return this
    .driver = driver
    .url = 'http://www.williams-sonoma.com/products/';
};
  
ProductDetailPage.prototype.addToCart = function() {
    var addProduct = driver.findElement(By.class(addButton));
    return this
    .waitForVisible(addProduct)
    .click(addProduct);
};

ProductDetailPage.prototype.checkout = function() {
    var checkoutButtonProduct = driver.findElement(By.id(checkoutButton));
    return this
    .waitForVisible(checkoutButtonProduct)
    .click(checkoutButtonProduct);
};
 
module.exports = ProductDetailPage;