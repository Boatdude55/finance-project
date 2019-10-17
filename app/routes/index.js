import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  afterModel(model, transition) {

    let target = transition.targetName.split('.');

    if (target.length === 2 && target[1] === 'index') {
      this.transitionTo('index.overview');
    }

  }
});
