import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  address: DS.attr('string'),
  city: DS.belongsTo('i-i-s-carsharing-city', { inverse: null, async: false })
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-carsharing-park.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-carsharing-park.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ParkE', 'i-i-s-carsharing-park', {
    address: attr('Address', { index: 0 }),
    city: belongsTo('i-i-s-carsharing-city', 'City', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ParkL', 'i-i-s-carsharing-park', {
    address: attr('Address', { index: 0 }),
    city: belongsTo('i-i-s-carsharing-city', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
