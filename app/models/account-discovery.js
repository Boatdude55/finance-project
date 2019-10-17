import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  name: DS.attr(),
  balance: DS.attr(),
  type: DS.attr(),
  status: DS.attr()
});
