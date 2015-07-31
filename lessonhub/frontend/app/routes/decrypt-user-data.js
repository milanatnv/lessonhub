import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.ajax({
      type: "POST",
      url: "/api/v1/decrypt-user-data",
      data: {data: params.data}
    }).then(null,() => this.transitionTo("/")); // TODO: display error message
  },

  setupController: function(controller, data){
    var model = data.user;
    model.firstName = model.name.split(' ')[0];
    this.controllerFor("register").set("model", model);
    this.controllerFor("hub").set("user", model);
    this.replaceWith("register");
  }
});
