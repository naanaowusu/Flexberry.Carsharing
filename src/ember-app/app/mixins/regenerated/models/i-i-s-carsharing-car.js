import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  carModel: DS.attr('i-i-s-carsharing-t-model'),
  carNumber: DS.attr('string'),
  carOdometer: DS.attr('number')
});

export let ValidationRules = {
  carModel: {
    descriptionKey: 'models.i-i-s-carsharing-car.validations.carModel.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  carNumber: {
    descriptionKey: 'models.i-i-s-carsharing-car.validations.carNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  carOdometer: {
    descriptionKey: 'models.i-i-s-carsharing-car.validations.carOdometer.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CarE', 'i-i-s-carsharing-car', {
    carModel: attr('Car model', { index: 0 }),
    carNumber: attr('Car number', { index: 1 }),
    carOdometer: attr('Car odometer', { index: 2 })
  });

  modelClass.defineProjection('CarL', 'i-i-s-carsharing-car', {
    carModel: attr('Car model', { index: 0 }),
    carNumber: attr('Car number', { index: 1 }),
    carOdometer: attr('Car odometer', { index: 2 })
  });
};
