import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  name: DS.attr(),
  type: DS.attr(),
  status: DS.attr(),
  balance: DS.attr(),
  aggregationStatusCode: DS.attr(),
  customerId: DS.attr(),
  institutionId: DS.attr(),
  balanceDate: DS.attr(),
  aggregationSuccessDate: DS.attr(),
  aggregationAttemptDate: DS.attr(),
  createdDate: DS.attr(),
  lastUpdatedDate: DS.attr(),
  institutionLoginId: DS.attr(),
  detail: DS.attr()
});
