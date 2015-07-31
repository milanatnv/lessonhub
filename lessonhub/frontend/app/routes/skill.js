import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'hub',
  templateName: 'hub',
  viewName: 'hub',

  model: function(){
    var collections = {
      skills: this.store.find('skill'),
      lessons: this.store.find('lesson')
    };
    return Ember.RSVP.hash(collections);
  },

  actions: {
    updateURL: function(model) {
      this.replaceWith("skill.show", model.get('title'));
    }
  }
});
