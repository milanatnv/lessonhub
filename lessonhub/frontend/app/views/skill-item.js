import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'skill-item',
  classNameBindings: 'isActive:active',
  tagName: 'li',

  isActive: function(){
    return this.get('skill') === this.get('controller.currentSkill');
  }.property('skill', 'controller.currentSkill')
});
