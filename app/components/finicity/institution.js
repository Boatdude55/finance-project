import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isSelected'],
  object: null,
  isSelected: false,
  structuralClasses: "",
  click() {
    this.toggleProperty('isSelected');
    this.onSelection(this.object);
  }
}).reopenClass({
  positionalParams: [
    'object'
  ]
});
