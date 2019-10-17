import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import { get, set } from '@ember/object';

const LoginModel = EmberObject.create({
  email: '',
  password: ''
});

export default Controller.extend({

  session: service(),

  LoginModel,

  init() {

    this._super(...arguments);
    this.errorMessage = null;
  },

  actions: {

    signIn(form) {

      let session = get(this, 'session');
      let { email, password } = form;

      session.authenticate('authenticator:custom', { email, password })
      .catch((reason) => {
        set(this, 'errorMessage', reason.error || reason);
      });

    }

  }


});
