import Ember from 'ember';

export default Ember.TextField.extend({
  keyUp: function(e){
    this.get('parentView').send('keyUp', e);
  }
});
