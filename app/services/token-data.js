import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

export default Ember.Service.extend({

  session: Ember.inject.service('session'),

  data: Ember.computed('session.session.content.authenticated', function () {

    var authenticator = getOwner(this).lookup('authenticator:jwt'),
      session = this.get('session.session.content.authenticated'),
      tokenData = {};

    if (session && Object.keys(session).length > 0) {
      tokenData = authenticator.getTokenData(session.token);
    }

    return tokenData.data;
  }),

});
