import Component from '@ember/component';

const masonryOptions = [
  'columnWidth',
  'itemSelector',
  'percentPosition',
  'horizontalOrder',
  'fitWidth',
  'originLeft',
  'originTop',
  'resize',
  'gutter'
];

export default Component.extend({

  classNames: ['grid'],

  selector: 'grid',

  customClasses: '',

  itemSelector: '.grid-item',

  percentPosition: true,

  horizontalOrder: true,

  fitWidth: false,

  originLeft: true,

  originTop: true,

  resize: true,

  gutter: 20,

  columnWidth: '.grid-sizer',

  init() {
    this._super(...arguments);
    this.masonry = null;
  },

  didInsertElement() {
    this._super(...arguments);
    this.masonry = new Masonry(this.element, this.getProperties(masonryOptions));
  }
}).reopenClass({
  positionalParams: [
    'width',
    'height',
    'columnWidth'
  ]
});
