import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  identification: null,
  password: null,
  error: null,

  actions: {
    authenticate: function() {
      var credentials = {
        identification : this.get('identification'),
        password : this.get('password')
      },
        authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials);
    }
  }

});
