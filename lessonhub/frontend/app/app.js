import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

import keys from './utils/keys';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.LinkView.reopen({
  attributeBindings: ['role']
});

Ember.View.reopen({
  keys: keys
});

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
