import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import { resolve } from 'rsvp';

export default Base.extend({

  ajax: service(),

  serverTokenEndpoint: '/app/token',

  restore(data) {
    return resolve(data);
  },

  authenticate({
    email,
    password
  }) {

    return resolve(this.get('ajax').request(this.get('serverTokenEndpoint'), {
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: {
        email,
        password
      },
      processData: false
    }));

  }

});
