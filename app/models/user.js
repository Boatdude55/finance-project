import DS from 'ember-data';

export default DS.Model.extend({
  tier: DS.attr(),
  customerId: DS.attr(),
  customerToken: DS.attr(),
  tokenCreateDate: DS.attr(),
  tokenExpireDate: DS.attr(),
  visits: DS.attr()
});
