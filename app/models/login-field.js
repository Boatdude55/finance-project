import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  value: DS.attr(),
  description: DS.attr(),
  mask: DS.attr(),
  instructions: DS.attr()
});
