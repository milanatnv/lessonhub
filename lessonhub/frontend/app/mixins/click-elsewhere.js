import Ember from 'ember';

/* Provides onClickElsewhere hooks
 * to views which are called when user clicks on
 * an element that doesn't match this view.
 */

export default Ember.Mixin.create({
  onClickElsewhere: Ember.K,

  handleClick: function(event){
    var targetElement = this.$(event.target);

    if (!targetElement){
      return;
    }

    var isThisElement = targetElement.
      closest(this.get('element')).
      length === 1;

    if (!isThisElement){
      this.onClickElsewhere(event);
    }
  },

  bindClickHandler: function(){
    if (typeof this.handleClick.bind === 'function'){
      this.$(window).bind('click', this.handleClick.bind(this));
    }
  }.on("didInsertElement"),

  unbindClickHandler: function(){
    if (typeof this.handleClick.bind === 'function'){
      this.$(window).unbind('click', this.handleClick.bind(this));
    }
  }.on("willDestroy")
});
