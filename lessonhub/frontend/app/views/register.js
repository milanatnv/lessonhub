import Ember from 'ember';

export default Ember.View.extend({
  setBodyID: function(){
    Ember.$('body').attr('id', 'welcome-page');
  }.on('didInsertElement'),

  isFooterPresent: false,

  actions: {
    showLoginModal: function(){
      this.$("#overlay").addClass("open");
    },
    closeLoginModal: function(){
      this.$("#overlay").removeClass("open");
    }
  }
});
