import Ember from 'ember';

export default Ember.ArrayController.extend({
  isSkillsActive: true,
  isLessonsActive: Ember.computed.not("isSkillsActive"),
  actions:{
    switchDropdownTab: function(){
      this.toggleProperty("isSkillsActive");
    }
  }
});
