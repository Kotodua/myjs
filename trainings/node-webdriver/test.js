require('chromedriver'); 
var wd = require('selenium-webdriver');
var assert = require('assert');

var URL = 'http://www.yandex.ru';

var client = new wd.Builder()
   .withCapabilities({ browserName: 'chrome' })
   .build();

client.get(URL).then(function() {
    client.findElement({ name: 'text' }).sendKeys('test');
    client.findElement({ css: '.b-form-button__input' }).click();

    client.getTitle().then(function(title) {
        assert.ok(title.indexOf('test — Яндекс: нашлось') > -1, 'Ничего не нашлось :(');
    });

    client.quit();
});