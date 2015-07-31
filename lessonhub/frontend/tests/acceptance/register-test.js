import Ember from 'ember';
import startApp from '../helpers/start-app';
import keys from '../../utils/keys';
import stubAPIEndpoint from '../helpers/api';
import inputState from '../helpers/input-state';

var application;

module('Acceptance: Register', {
  setup: function() {
    application = startApp();
    stubAPIEndpoint('/api/v1/register', {});
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('registering successfully', function(){
  visit('/register');

  andThen(function(){
    find('.password-section').css('display', 'none');
    inputState('Colorado');

    equal(find('.btn-register').is(':disabled'), true,
         "register button is disabled by default");

    fillIn("#password", "letmein");
    fillIn("#password_confirmation", "letmein");

    equal(find('.btn-register').is(':disabled'), true,
         "register is enabled once password becomes valid");
    click(".btn-register");

    andThen(function(){
      equal(currentPath(), "skill.show.index",
            "it redirects to /hub");
    });
  });
});

test('accepts registration submits with enter', function(){
  visit('/register');

  andThen(function(){
    inputState('Colorado');

    fillIn("#password", "letmein");
    fillIn("#password_confirmation", "letmein");
    keyEvent("#password_confirmation", "keyup", keys.enter);

    andThen(function(){
      equal(currentPath(), "skill.show.index",
            "it redirects to /hub");
    });
  });
});

test("shows errors when passwords don't match", function(){
  visit('/register');

  andThen(function(){
    inputState('Colorado');

    fillIn("#password", "ffffff");
    fillIn("#password_confirmation", "password");
    keyEvent("#password_confirmation", "keyup", keys.enter);

    andThen(function(){
      equal(find('.validate-error-confirm-password').is(':visible'), true,
            "validation errors should be visible");
      equal(find('.btn-success').is(':disabled'), true,
            "submit button should be disabled");
    });

  });
});

test('state input suggests states', function(){
  visit('/register');

  var assertSuggestedState = function(expected){
    var suggestedState = find('.select-container li.selected').text();
    equal(new RegExp(expected).test(suggestedState), true,
         "suggested state is " + expected);
  };

  andThen(function(){
    fillIn(".select-container input", "al");

    andThen(function(){
      assertSuggestedState('Alabama');
      equal(find('.select-container li').length, 5,
           "it suggests 5 states when 'al' is in input field");

      keyEvent(".select-container input", "keyup", keys.downArrow);

      andThen(function(){
        assertSuggestedState('Alaska');

        keyEvent(".select-container input", "keyup", keys.enter);
        equal(find(".select-container input").val(), 'Alaska',
              "input field value is updated to suggested state when enter is pressed");
      });
    });

  });
});
