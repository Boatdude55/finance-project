import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  session: service(),

  tagName: 'td',

  invalidate: (session) => session.invalidate()

}).reopenClass({
  positionalParams: ['invalidate']
});
