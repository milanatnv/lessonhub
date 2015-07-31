import Ember from 'ember';
import startApp from '../helpers/start-app';
import stubAPIEndpoint from '../helpers/api';

var application;

module('Acceptance: UserDataDecryption', {
  setup: function() {
    application = startApp();
    stubAPIEndpoint('/api/v1/decrypt-user-data', {
      user: {
        name: "Walter Smith",
        email: "walter@jpwynnehighschool.com"
      }
    });
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /register/:some-encrypted-data', function() {
  visit('/register/some-encrypted-data');

  andThen(function() {
    equal(currentPath(), 'register');
    var greeting = find(".welcome-section h1").text();
    equal(/Hi Walter! Welcome to Lesson Hub./.test(greeting), true);
    equal(find('#email-input').val(), "walter@jpwynnehighschool.com");

    visit('/hub');
    andThen(function(){
      var fullName = find("a#profile-menu").text();
      equal(/Walter Smith/.test(fullName), true);
    });
  });
});
