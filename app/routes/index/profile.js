import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  sessionUser: service(),
  model() {
    return this.sessionUser.get('user');
  }
});
