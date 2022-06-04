import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startOfRent: DS.attr('date'),
  endOfRent: DS.attr('date'),
  pricePlan: DS.attr('i-i-s-carsharing-t-plan'),
  rentedCar: DS.belongsTo('i-i-s-carsharing-car', { inverse: null, async: false }),
  dropAt: DS.belongsTo('i-i-s-carsharing-park', { inverse: null, async: false }),
  rentAt: DS.belongsTo('i-i-s-carsharing-park', { inverse: null, async: false })
});

export let ValidationRules = {
  startOfRent: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.startOfRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endOfRent: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.endOfRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  pricePlan: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.pricePlan.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  rentedCar: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.rentedCar.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dropAt: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.dropAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  rentAt: {
    descriptionKey: 'models.i-i-s-carsharing-rent.validations.rentAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RentE', 'i-i-s-carsharing-rent', {
    startOfRent: attr('Start of rent', { index: 0 }),
    endOfRent: attr('End of rent', { index: 1 }),
    pricePlan: attr('Price plan', { index: 2 }),
    rentedCar: belongsTo('i-i-s-carsharing-car', 'Rented car', {
      carNumber: attr('Car number', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'carNumber' }),
    dropAt: belongsTo('i-i-s-carsharing-park', 'Drop at', {
      address: attr('Address', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'address' }),
    rentAt: belongsTo('i-i-s-carsharing-park', 'Rent at', {
      address: attr('Address', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'address' })
  });

  modelClass.defineProjection('RentL', 'i-i-s-carsharing-rent', {
    startOfRent: attr('Start of rent', { index: 0 }),
    endOfRent: attr('End of rent', { index: 1 }),
    pricePlan: attr('Price plan', { index: 2 }),
    rentedCar: belongsTo('i-i-s-carsharing-car', 'Car number', {
      carNumber: attr('Car number', { index: 3 })
    }, { index: -1, hidden: true }),
    dropAt: belongsTo('i-i-s-carsharing-park', 'Address', {
      address: attr('Address', { index: 4 })
    }, { index: -1, hidden: true }),
    rentAt: belongsTo('i-i-s-carsharing-park', 'Address', {
      address: attr('Address', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
