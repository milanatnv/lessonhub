/* jshint ignore:start */

// This file contains a smoke test that is ran by a CI server
// to confirm that a deployment was successful.
//
// Read more about smoke tests here:
//
// http://samsaffron.com/archive/2013/02/22/do-you-smoke-test
//
// Run this file with
//
//   ./node_modules/.bin/casperjs test tests/smoke_test.js
//
if (typeof casper !== "undefined"){
  casper.options.waitTimeout = 10000; // 10s
  casper.test.begin('Basic smoke test', 7, function suite(test) {

    casper.start("https://lessonhub-staging.herokuapp.com/", function(){
      test.assertExists('header', "header is present");
      test.assertExists('footer', "footer is present");
      test.assertExists('.select-container input', "state input is present");
      this.evaluate(function(){
        Ember.$('.select-container input').val('Colorado').change();
        Ember.$('.select-container form').submit();
      });
    });

    casper.then(function(){
      test.assertExists('input#password', "password input is present");
      test.assertExists('input#password_confirmation', "password input is present");
      this.sendKeys('input[id=password]', 'ffffff');
      this.sendKeys('input[id=password_confirmation]', 'ffffff');
      this.click("button.btn-register");
      casper.waitUntilVisible('#hub-sections-row');
    });

    casper.then(function(){
      test.assertUrlMatch(/^https:\/\/lessonhub-staging.herokuapp.com\/skills\/3\.NF\.A\.1$/, "it redirects to first skill");
      test.assertEval(function() {
        return __utils__.findAll(".skills-section .skill").length == 3;
      }, "three main skill sections are shown");
    });

    casper.run(function() {
      test.done();
    });
  });
}
