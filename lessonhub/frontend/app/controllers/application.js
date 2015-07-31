import Ember from 'ember';

export default Ember.Controller.extend({
  isFooterPresent: function(){
    return ! /register/.test(this.get('currentPath'));
  }.property("currentPath")
});
