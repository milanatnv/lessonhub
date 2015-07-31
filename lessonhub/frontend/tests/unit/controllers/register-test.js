import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:register', 'RegisterController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test(".isPasswordValid validates password length", function(){
  var controller = this.subject();

  equal(controller.get("isPasswordValid"), false,
        "it is false initially");

  controller.set("password", "foo");

  equal(controller.get("isPasswordValid"), false,
        "passwords shorter than 6 chars are invalid");

  controller.set("password", "letmein");
  equal(controller.get("isPasswordValid"), true,
        "passwords with 6 or more chars are valid");
});

test(".isConfirmationValid checks if confirmation matches password", function(){
  var controller = this.subject();

  equal(controller.get("isConfirmationValid"), false,
        "it is false initially");

  controller.setProperties({password: "letmein",
                            confirmation: "password"});

  equal(controller.get("isConfirmationValid"), false,
        "it is false when there is no match");

  controller.setProperties({password: "p4ssw0rd",
                            confirmation: "p4ssw0rd"});

  equal(controller.get("isConfirmationValid"), true,
        "it is true when there is match");
});

test(".isValidRegistration checks if password and confirmation are valid", function(){
  var controller = this.subject();

  equal(controller.get("isValidRegistration"), false,
        "it is false initially");

  controller.setProperties({isPasswordValid: false,
                            isConfirmationValid: true});

  equal(controller.get("isValidRegistration"), false,
        "it is false when password is invalid");

  controller.setProperties({isPasswordValid: true,
                            isConfirmationValid: true});

  equal(controller.get("isValidRegistration"), true,
        "it is true when confirmation and password match");
});
