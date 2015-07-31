import Ember from 'ember';
import states from '../utils/states';
import keys from '../utils/keys';

export default Ember.View.extend({
  templateName: 'views/state-select',
  availableStates: states,
  value: Ember.computed.alias('controller.selectedState'),

  rememberDropdown: function(){
    this.set('dropdown', this.$('.dropdown-menu'));
  }.on('didInsertElement'),

  focusInput: function(){
    this.$('input').focus();
  }.on('didInsertElement'),

  passwordSectionVisibilityManager: function(){
    if (this.get('stateSelected')){
      Ember.$('.height-space1').stop(true, true).slideUp();
      Ember.$('.password-section').stop(true, true).slideDown(800);
    } else {
      Ember.$('.height-space1').stop(true, true).slideDown();
      Ember.$('.password-section').stop(true, true).slideUp(800);
    }
  }.observes('stateSelected'),

  updateStateSuggestions: function(){
    this.set("stateCandidates", this.get("availableStates").filter((state) =>{
      return (new RegExp(this.get('value'), 'i').test(state.name));
    }));
  }.observes('value'),

  updateSuggestedState: function(){
    this.set("suggestedState", this.get('stateCandidates.firstObject'));
    this.set("suggestedIndex", 0);
  }.observes('value'),

  dropdownMenuVisibiltyHandler: function(){
    if (this.get('value') && this.get('stateCandidates').length > 0){
      this.get('dropdown').show();
    } else {
      this.get('dropdown').hide();
    }
  }.observes("stateCandidates", "value"),

  changeSuggestedState: function(index){
    var suggestedState = this.get('stateCandidates')[index];
    if (suggestedState){
      this.setProperties({
        suggestedState: suggestedState,
        suggestedIndex: index
      });
    }
  },

  actions: {
    selectState: function(state){
      this.set('stateSelected', true);
      this.set('value', state.name);
      this.focusInput();
      this.get('dropdown').hide();
      this.set('suggestedState', null);
    },

    selectSuggestedState: function(){
      if (this.get('stateCandidates').length > 0 && this.get('suggestedState')){
        this.set('stateSelected', true);
        this.set('value', this.get('suggestedState.name'));
        this.set('suggestedState', null);
        this.get('dropdown').hide();
      }
    },

    keyUp: function(e){
      if (!this.get('stateCandidates') || this.get('stateCandidates').length < 1){
        return;
      }

      if (e.which === keys.downArrow){
        this.changeSuggestedState(this.get('suggestedIndex') + 1);
      }

      if (e.which === keys.upArrow){
        this.changeSuggestedState(this.get('suggestedIndex') - 1);
      }
    }
  }
});
