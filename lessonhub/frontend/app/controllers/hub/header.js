import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['hub'],
  isDraftMode: Ember.computed.alias('controllers.hub.isDraftMode'),
  isDropdownOpen: Ember.computed.alias('controllers.hub.isDropdownOpen'),

  titleChanged: function(){
    this.send('updateURL', this.get('model'));
  }.observes('model.title')
});
