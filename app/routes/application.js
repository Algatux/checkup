import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session : Ember.inject.service('session'),

  sessionData: Ember.computed('session.session.content.authenticated', function() {
    return JSON.stringify(this.get('session.session.content.authenticated'), null, '\t');
  }),

  tokenData: Ember.computed('session.session.content.authenticated', function() {

    var authenticator = getOwner(this).lookup('authenticator:jwt'),
      session = this.get('session.session.content.authenticated'),
      tokenData = {};

    if(session && Object.keys(session).length > 0) {
      tokenData = authenticator.getTokenData(session.token);
    }
    return tokenData;
  }),

});
