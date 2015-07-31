import Ember from 'ember';

export default Ember.Controller.extend({
  user: {
    name: "Mary Smith"
  },
  isDraftMode: false,

  actions: {
    toggleDraftMode: function(){
      this.toggleProperty("isDraftMode");
    }
  }
});
