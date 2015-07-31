import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function(){
      Ember.$.ajax({
        type: "POST",
        url: '/api/v1/register',
        data: {
          email: this.get('controller.model.email'),
          state: this.get('controller.selectedState'),
          password: this.get('controller.password'),
          password_confirmation: this.get('controller.confirmation')
        }
      }).then(() => {
        this.replaceWith("hub");
      });
    }
  }
});
