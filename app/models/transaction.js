import DS from 'ember-data';

export default DS.Model.extend({
  accountId: DS.attr(),
  amount: DS.attr(),
  bonusAmount: DS.attr(),
  checkNum: DS.attr(),
  createdDate: DS.attr(),
  customerId: DS.attr(),
  description: DS.attr(),
  escrowAmount: DS.attr(),
  feeAmount: DS.attr(),
  interestAmount: DS.attr(),
  memo: DS.attr(),
  postedDate: DS.attr(),
  status: DS.attr(),
  subaccount: DS.attr(),
  transactionDate: DS.attr(),
  type: DS.attr(),
  unitQuantity: DS.attr(),
  unitValue: DS.attr(),
  categorization: DS.attr()
});
