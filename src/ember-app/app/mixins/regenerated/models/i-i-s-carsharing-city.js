import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  car: DS.belongsTo('i-i-s-carsharing-car', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-carsharing-city.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  car: {
    descriptionKey: 'models.i-i-s-carsharing-city.validations.car.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CityE', 'i-i-s-carsharing-city', {
    name: attr('Name', { index: 0 }),
    car: belongsTo('i-i-s-carsharing-car', 'Car', {
      carNumber: attr('Car number', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'carNumber' })
  });

  modelClass.defineProjection('CityL', 'i-i-s-carsharing-city', {
    name: attr('Name', { index: 0 }),
    car: belongsTo('i-i-s-carsharing-car', 'Car number', {
      carNumber: attr('Car number', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
