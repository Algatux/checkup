import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  tokenData : Ember.inject.service('token-data'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
