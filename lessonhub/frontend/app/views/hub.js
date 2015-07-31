import Ember from 'ember';

export default Ember.View.extend({
  isDropdownOpen: Ember.computed.alias("controller.isDropdownOpen"),
  classNameBindings: "isDropdownOpen:modal-open",

  setBodyID: function(){
    Ember.$('body').attr('id', 'lessonhub-page');
  }.on('didInsertElement'),

  isFooterPresent: true,

  smoothFadeIn: function(){
    this.$().css("display", "none");
    this.$().fadeIn(800);
  }.on('didInsertElement')
});
