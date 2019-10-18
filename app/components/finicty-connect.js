import Component from '@ember/component';
import { inject as service } from '@ember/service';

const connectOptions = [
  'selector',
  'overlay',
  'success',
  'cancel',
  'error',
  'loaded'
];
export default Component.extend({
  tagName: 'iframe',
  id: 'connect-container',
  finicityConnectUrl: '',
  errorMessage: null,
  overlay: "rgba(255,255,255, 0)",
  selector: '#connect-container',
  store: service(),
  sessionUser: service(),

  error: function () {},
  cancel: function () {},
  loaded: function () {},
  success: function () {},

  init() {

    this._super(...arguments);

    let ctrl = this;
    let query = this.seesionUser.get('user');
    console.log(query);

    this.query('connect', query)
    .then((payload) => {
      ctrl.finicityConnectUrl = payload;
    })
    .catch((error) => {
      ctrl.set('errorMessage', error.error || error);
    });

  },

  didRender() {
    // finicityConnectUrl.connectIFrame(this.finicityConnectUrl, this.getProperties(connectOptions));
  }

});
