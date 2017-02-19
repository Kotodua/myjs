"use strict";

var selenium = require("selenium-webdriver");
var	chai = require("chai");
var	chai.use = require("chai-as-promised");
var	expect = chai.expect;


before(function() {
  this.thimeout(10000);
  this.driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
  return this.driver.getWindowHandle();
});

after(function() {
  return this.driver.quit();
});

describe('Webdriver tutorial', function() {
  return beforeEach(function() {
    return this.driver.get('http://google.com');
  });
});

it('has the title of the post in the window\'s title', function() {
  return expect(this.driver.getTitle()).to.eventually.contain('Getting started with Selenium Webdriver for node.js');
});

it('has publication date', function() {
  var text;
  text = this.driver.findElement({
    css: '.post .meta time'
  }).getText();
  return expect(text).to.eventually.equal('google');
});

it('links back to the homepage', function() {
  this.driver.findElement({
    linkText: 'find'
  }).click();
  return expect(this.driver.getCurrentUrl()).to.eventually.equal('http://google.com');
});