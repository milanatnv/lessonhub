import Ember from 'ember';

export default Ember.View.extend({
  templateName: "main-menu",
  classNames: "dropdown-menu",
  attributeBindings: ["role", "aria-labelledby"],
  role: "menu",
  "aria-labelledby": "dropdownMenu2",

  click: function(event){
    event.stopPropagation();
    return false;
  }
});
