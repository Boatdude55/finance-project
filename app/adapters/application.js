import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({

  namespace: 'app',

  session: service(),

  headers: computed('session.isAuthenticated', function() {

    let { refreshToken, idToken } = get(this, 'session.data.authenticated.data');

    return {
      'REFRESH_TOKEN': refreshToken,
      'ID_TOKEN': idToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

  })
});
