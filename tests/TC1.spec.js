var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var homepage = require('../shared/ui/homepage');
var productpage = require('../shared/ui/productpage');
var productdetailpage = require('../shared/ui/productdetailpage');
var checkoutpage = require('../shared/ui/checkoutpage');
var productToSave = '';

test.before(function() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
});
    
test.describe('F1: Cart Checkout', () => {

  test.describe('S1: Save for Later', () => {

    test.it('TC1: Tea Kettle is Saved for Later When Not Logged In', function*() {
      
      return this
      .homepage.visit()
      .homepage.hoverProductLine(cookware)
      .homepage.clickProductType(teakettles)
      .productpage.clickProduct()
      .productdetailpage.addToCart()
      .productdetailpage.checkout()
      .productToSave = checkoutpage.saveForLater()
      .assertIsVisible(checkoutpage.saveForLaterHeader)
      .assert.equal(checkoutpage.saveForLaterProduct(), productToSave, 'Saved Product Name Should Be Same as Product at Checkout.')
    });
  });
});

test.after(function() {
    driver.quit();
});