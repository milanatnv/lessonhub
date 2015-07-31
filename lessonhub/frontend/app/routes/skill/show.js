import Ember from 'ember';

export default Ember.Route.extend({
  lessons: function(){
    return this.modelFor("skill").lessons;
  }.property(),

  skills: function(){
    return this.modelFor("skill").skills.sortBy("title");
  }.property(),

  model: function(params){
    var model = this.get("skills").findBy('title', params.title);
    return this.store.find('skill', model.id);
  },

  setupController: function(controller, model){
    this.controllerFor("skill").setProperties({
      model: model,
      isDropdownOpen: false
    });

    this.controllerFor("main-menu").setProperties({
      skills: this.get("skills"),
      lessons: this.get("lessons"),
      currentSkill: model
    });

    this.controllerFor("hub/header").setProperties({
      model: model
    });
  },

  actions: {
    nextSkill: function(){
      var i = this.get("skills").indexOf(this.controllerFor("skill").get("model"));
      var nextSkill = this.get("skills")[i + 1];
      if (nextSkill){
        this.transitionTo("skill.show", nextSkill);
      }
    },

    previousSkill: function(){
      var i = this.get("skills").indexOf(this.controllerFor("skill").get("model"));
      var prevSkill = this.get("skills")[i - 1];
      if (prevSkill){
        this.transitionTo("skill.show", prevSkill);
      }
    },

    closeDropdown: function(){
      this.controllerFor("skill").set("isDropdownOpen", false);
    },

    toggleDropdown: function(){
      this.controllerFor("skill").toggleProperty("isDropdownOpen");
    }
  }
});
