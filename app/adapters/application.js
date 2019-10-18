import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({

  namespace: 'app',

  session: service(),
  sessionUser: service(),

  headers: computed('session.isAuthenticated' , 'sessionUser.user', function() {

    let { refreshToken, idToken } = get(this, 'session.data.authenticated.data');
    let { customerToken } = this.sessionUser.get('user');

    console.log(session.data.authenticated, sessionUser.user);

    return {
      'Refresh-Token': refreshToken,
      'id-Token': idToken,
      'App-Token': customerToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

  })
});
