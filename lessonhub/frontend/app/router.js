import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('decrypt-user-data', { path: '/register/:data' });
  this.route('hub');
  this.resource("skill", { path: '/skills'}, function(){
    this.route('show', { path: ':title' }, function(){
      this.route('pre-assesment');
      this.route('best-practices');
      this.route('evidence-of-learning');
    });
  });
});

export default Router;
