import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'li',
  classNameBindings: 'isSelected:selected',
  isSelected: function(){
    return this.get('parentView.suggestedState.name') === this.get('content.name');
  }.property('parentView.suggestedState')
});
