import Component from '@ember/component';

export default Component.extend({
  tagName: 'li'
}).reopenClass({
  positionalParams: [
    'linkTo',
    'linkToCaption',
    'routes'
  ]
});
