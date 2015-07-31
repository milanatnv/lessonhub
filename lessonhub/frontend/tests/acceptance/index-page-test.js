import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: IndexPage', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('it redirects to /register', function() {
  visit('/');

  andThen(function(){
    equal(currentPath(), 'register');
  });
});
