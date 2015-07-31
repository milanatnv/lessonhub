import Ember from 'ember';

export default Ember.Controller.extend({
  selectedState: null,
  password: "",
  confirmation: "",
  isPasswordBlurred: false,
  isPasswordConfirmationBlurred: false,

  states: [ "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA",
            "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS",
            "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA",
            "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WV", "WI", "WY" ],

  isPasswordPresent: function(){
    return this.get("password").length > 0;
  }.property("password"),

  isPasswordValid: function(){
    return this.get("password").length >= 6;
  }.property("password"),

  isConfirmationPresent: function(){
    return this.get("confirmation").length > 0;
  }.property("confirmation"),

  isConfirmationValid: function(){
    return this.get("isConfirmationPresent") &&
      this.get("confirmation") === this.get("password");
  }.property("confirmation", "password"),

  isInvalidRegistration: Ember.computed.not("isValidRegistration"),
  isValidRegistration: Ember.computed.and("isPasswordValid", "isConfirmationValid"),

  model: {
    email: "mary.smith@baileymiddleschool.com",
    firstName: "Mary"
  },

  actions: {
    submit: function(){
      this.set("isPasswordConfirmationBlurred", true);
      this.set("isPasswordBlurred", true);

      if (this.get('isValidRegistration')){
        this.get('target').send('submit');
      }
    },

    blur: function(element){
      element = `is_${element}`;
      var property = `${element.camelize()}Blurred`;
      this.set(property, true);
    }
  }
});
