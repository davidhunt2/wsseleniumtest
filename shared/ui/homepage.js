var webdriver = require('selenium-webdriver');
var timeout = 10000;
var overlay = '.stickyOverlayMask';
var overlayMin = '.stickyOverlayMinimizeButton';
var cookware = '.topnav-cookware';
var teaKettles = 'Tea Kettles';
 
HomePage = function HomePage(driver) {
    return this
    .driver = driver
    .url = 'http://www.williams-sonoma.com/';
};
 
HomePage.prototype.visit = function() {
    driver.get(this.url);
    var overlayScreen = driver.findElements(By.class("overlay"));
    var overlayClose = driver.findElements(By.class("overlayMin"));
    if (isVisible(overlayScreen)) {
        click(overlayClose)
    };
    webdriver.promise.fulfilled(true);
};
 
HomePage.prototype.hoverProductLine = function(productLine) {
    var productLineHover = driver.findElements(By.class("productLine"));
    return this
    .moveToObject(productLineHover);
};
 
HomePage.prototype.clickProductType = function(productType) {
    var productTypeLink = driver.findElement(By.linkText(productType));
    return this
    .waitForVisible(productTypeLink)
    .click(productLine);
};
 
module.exports = HomePage;