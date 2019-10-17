import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  accountTypeDescription: DS.attr(),
  urlHomeApp: DS.attr(),
  urlLogonApp: DS.attr(),
  phone: DS.attr(),
  currency: DS.attr(),
  email: DS.attr(),
  specialText: DS.attr(),
  address: DS.attr()
});
