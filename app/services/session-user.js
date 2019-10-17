import RSVP from 'rsvp';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service(),
  store: service(),

  loadCurrentUser() {

    return new RSVP.Promise((resolve, reject) => {

      const localId = this.get('session.data.authenticated.data.localId');

      if (!isEmpty(localId)) {

        this.get('store').findRecord('user', localId).then((user) => {

          this.set('user', user);
          resolve();

        }, reject);

      } else {

        resolve();

      }

    });

  }

});
