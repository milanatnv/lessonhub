import Ember from 'ember';

export default Ember.TextField.extend({
  focusOut: function(){
    this.get("parentView.controller").send("blur", this.get("id"));
  }
});
