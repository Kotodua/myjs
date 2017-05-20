/*
* Carry out a Google Search
*/
 
"use strict";
require('chromedriver'); 
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var assert = require('assert');
var test = require('selenium-webdriver/testing');

var searchWord = 'Ortnec';

var checkText = new RegExp("ortnec", 'i');
console.log(checkText);

var links = [];

test.describe('Google Search', function() {
    test.it('http://ortnec.com on top of the results', function() {
        this.timeout(15000);
         
        browser.get('https://www.google.com');
        browser.findElement(webdriver.By.name('q')).sendKeys(searchWord);
        browser.findElement(webdriver.By.name('btnG')).click();
        browser.wait(webdriver.until.elementLocated(webdriver.By.className('r')), 2000);
        browser.findElements(webdriver.By.className('r')).then(function(result){

            for (var i = 0; i < result.length; i++){
                result[i].findElement(webdriver.By.tagName('a')).then(function(link){
                    link.getAttribute("href").then(function(linktext){
                        if (i == 0){
                            assert.notEqual(linktext.indexOf('http://ortnec.com'), -1);
                        }
                        links.push(linktext);
                    });
                });
            };
        });
    });
});

test.describe('Links from search', function(){
    test.it("should open and pages should contain word: "+checkText, function(){
        this.timeout(45000);     

        for (var link in links){       
            browser.get(links[link]);
            browser.wait(webdriver.until.elementLocated(webdriver.By.tagName('body')), 3000);
            browser.findElement(webdriver.By.tagName("body")).getText().then(function(pageText){
                assert.notEqual(pageText.match(checkText), -1);
            });
            browser.navigate().back();
        }
    });

});