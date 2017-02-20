/*
* Carry out a Google Search
*/
 
"use strict";
require('chromedriver'); 
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var RegEx = require('regex'); 


function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
    
function clickLink(link) {
    link.click();
}
 
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 
function findTutsPlusLink() {
    return browser.findElements(webdriver.By.linkText("Learn How To Code by Envato Tuts+")).then(function(result) {
        return result;
    });
}

function getAllResults(){
    return browser.findElements(webdriver.By.className('r')).then(function(result){
        result[0].findElement(webdriver.By.tagName('a')).then(function(link){
            link.getAttribute("href").then(function(linktext){
                var res = linktext.search("www.macmillandictionary.com");            
                console.log(linktext);
            })
        })
        result[0].click();
    });    
}

 
function closeBrowser() {
    browser.quit();
}
 
browser.get('https://www.google.com');
browser.findElement(webdriver.By.name('q')).sendKeys('find something');
browser.findElement(webdriver.By.name('btnG')).click();

setTimeout(getAllResults, 5000);




//browser.wait(findTutsPlusLink, 10000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);