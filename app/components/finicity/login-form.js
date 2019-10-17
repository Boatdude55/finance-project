import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';
import { all, task, timeout } from 'ember-concurrency';

export default Component.extend({

  store: service(),
  object: null,

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this.setup.perform(this.object);
  },

  setup: task(function * (institutions) {

    let childTasks, result;

    childTasks = institutions.map((item) => {
      return this.get('_fieldAjax').perform(item);
    }, this);

    try {

      result = yield all(childTasks);
      console.log(childTasks, result);
      return Array.from(result);

    }catch(e) {
      console.error(e);
    }


  })
  .restartable(),

  submit: task(function * () {

  })
  .restartable(),

  _fieldAjax: task(function * (institution) {

    let result = yield this.store.findRecord('login-form', institution.id);

    /**
     * @todo update late for less redundant data format
     */
    return result.loginForm;

  })
  .enqueue()
  .maxConcurrency(3),

  actions: {
    submitLogin() {

    }
  }

}).reopenClass({
  positionalParams: [
    'object'
  ]
});
