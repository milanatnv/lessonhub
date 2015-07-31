import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(){
    var defaultSkill = this.modelFor('skill').skills.sortBy("title")[0];
    this.transitionTo("skill.show", defaultSkill);
  }
});
