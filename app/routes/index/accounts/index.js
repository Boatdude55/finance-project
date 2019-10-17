import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  store: service(),
  sessionUser: service(),

  model() {
    return this.store.query('account', {
      customerId: this.sessionUser.get('user').customerId
    })
    .catch(() => {
    });
  }

});
