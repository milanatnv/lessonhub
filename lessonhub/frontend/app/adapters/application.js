import DS from 'ember-data';
import config from '../config/environment';

var Adapter = config.useFixtures ? DS.FixtureAdapter : DS.ActiveModelAdapter;

export default Adapter.extend({
  namespace: 'api/v1'
});
