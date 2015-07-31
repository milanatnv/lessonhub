import Ember from 'ember';

export default function(value){
  Ember.$('.select-container input').val(value).change();
  Ember.$('.select-container form').submit();
}
