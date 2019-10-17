import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
// import { set, get } from '@ember/object';
import { isBlank } from '@ember/utils';
import { all, task, timeout } from 'ember-concurrency';

const DEBOUNCE_MS = 250;
const searchModel = {
  start: 1,
  limit: 25
};

export default Controller.extend({

  store: service(),
  searchModel,
  error: null,
  selected: A(),
  accounts: null,

  init() {
    this._super(...arguments);
  },

  searchTask: task(function * (search) {

    if (isBlank(search)) { return []; }

    let result;
    let { start, limit } = this.searchModel;
    let query = {
      search,
      start,
      limit
    };

    yield timeout(DEBOUNCE_MS);

    try {

      result = yield this.store.query('institution', query);

      return result;

    }catch(reason) {
      this.set('error', reason.error || reason);
    }

  })
  .restartable(),

  accountDiscoveryTask: task(function * () {

    let query = {};

    try {

      let result  = yield this.store.query('account-discovery', query);

    }catch (e) {
      console.error(e);
    }

  })
  .restartable(),

  actions: {

    toggleSelection(selection) {
      let selected = this.get('selected');

      if (selected.findBy('id', selection.id)) {
        selected.removeObject(selection);
      }else {
        selected.pushObject(selection);
      }
    },

    checkSelected(resolve) {
      let selected = this.get('selected');

      if (selected.length > 0) {
        resolve();
      }
    }

  },
});
