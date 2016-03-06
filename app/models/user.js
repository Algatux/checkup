import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),

  fullName: Ember.computed('firstname','lastname', function(){
    return `${this.get('firstname')} ${this.get('lastname')}`;
  }),

  userDescription: Ember.computed('username', 'email', 'fullName', function() {
    return `${this.get('username')}, ${this.get('fullName')}  - ${this.get('email')}`;
  }),

});
