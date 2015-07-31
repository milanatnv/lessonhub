import Ember from 'ember';

export default Ember.View.extend({
  isEditing: false,
  tagName: 'span',
  isDraftMode: Ember.computed.alias("controller.isDraftMode"),

  editContent: function(){
    if (this.get("isDraftMode") && !this.get("isEditing")){
      this.set("isEditing", true);
      this.set("oldContent", this.get("content"));
      if (this.$('textarea').length > 0){
        Ember.run.later(this.fixTextareaHeight.bind(this));
      }
      Ember.run.later(this.focusInput.bind(this));
    }
  },

  saveContent: function(){
    this.set("isEditing", false);
  },

  observeDraftMode: function(){
    if (!this.get("isDraftMode")){
      this.set("isEditing", false);
    }
  }.observes('isDraftMode'),

  fixTextareaHeight: function(){
    var textarea = this.$('textarea');
    textarea.height(textarea[0].scrollHeight);
  },

  focusInput: function(){
    this.$('textarea, input').focus();
  },

  keyDown: function(e){
    if (!this.get("isEditing")) {
      return false;
    }

    if (e.which === this.get("keys").escape){
      this.set("isEditing", false);
      this.set("content", this.get("oldContent"));
    }

    if (e.which === this.get("keys").enter && !e.shiftKey){
      this.saveContent();
    }
  },

  actions: {
    editContent: function(){
      this.editContent();
    },

    saveContent: function(){
      this.saveContent();
    }
  }
});
