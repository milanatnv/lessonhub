import Ember from 'ember';

import ClickElsewhere from './../mixins/click-elsewhere';

export default Ember.View.extend(ClickElsewhere, Ember.ViewTargetActionSupport, {
  templateName: 'lesson-menu',
  isDropdownOpen: Ember.computed.alias("parentView.isDropdownOpen"),

  onClickElsewhere: function(){
    this.triggerAction({
      action: "closeDropdown"
    });
  }
});
