import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: LoginModal', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('open and close login modal', function() {
  visit('/');

  var openModalLink = find('a:contains("Login"):visible');
  var closeModalLink = find('#registration .close');

  equal(openModalLink.length, 1,
        "login link is present");

  click(openModalLink);

  andThen(function() {
    equal(find("#overlay").hasClass('open'), true,
          "login modal pops up");

    click(closeModalLink);

    andThen(function(){
      equal(find("#overlay").hasClass('open'), false,
           "login modal closes");
    });
  });
});

test('clicking on login button in modal closes it', function() {
  visit('/');

  var openModalLink = find('a:contains("Login"):visible');
  var loginButton = find('#registration .btn-success');

  click(openModalLink);

  andThen(function() {
    click(loginButton);

    andThen(function(){
      equal(find("#overlay").hasClass('open'), false,
           "login modal closes");
    });
  });
});
