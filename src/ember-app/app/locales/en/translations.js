import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCarsharingCarLForm from './forms/i-i-s-carsharing-car-l';
import IISCarsharingCityLForm from './forms/i-i-s-carsharing-city-l';
import IISCarsharingParkLForm from './forms/i-i-s-carsharing-park-l';
import IISCarsharingRentLForm from './forms/i-i-s-carsharing-rent-l';
import IISCarsharingCarEForm from './forms/i-i-s-carsharing-car-e';
import IISCarsharingCityEForm from './forms/i-i-s-carsharing-city-e';
import IISCarsharingParkEForm from './forms/i-i-s-carsharing-park-e';
import IISCarsharingRentEForm from './forms/i-i-s-carsharing-rent-e';
import IISCarsharingCarModel from './models/i-i-s-carsharing-car';
import IISCarsharingCityModel from './models/i-i-s-carsharing-city';
import IISCarsharingParkModel from './models/i-i-s-carsharing-park';
import IISCarsharingRentModel from './models/i-i-s-carsharing-rent';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-carsharing-car': IISCarsharingCarModel,
    'i-i-s-carsharing-city': IISCarsharingCityModel,
    'i-i-s-carsharing-park': IISCarsharingParkModel,
    'i-i-s-carsharing-rent': IISCarsharingRentModel
  },

  'application-name': 'Carsharing',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Carsharing',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Carsharing',
          title: 'Carsharing'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        carsharing: {
          caption: 'Carsharing',
          title: 'Carsharing',
          'i-i-s-carsharing-park-l': {
            caption: 'Park',
            title: ''
          },
          'i-i-s-carsharing-rent-l': {
            caption: 'Rent',
            title: ''
          },
          'i-i-s-carsharing-city-l': {
            caption: 'City',
            title: ''
          },
          'i-i-s-carsharing-car-l': {
            caption: 'Car',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-carsharing-car-l': IISCarsharingCarLForm,
    'i-i-s-carsharing-city-l': IISCarsharingCityLForm,
    'i-i-s-carsharing-park-l': IISCarsharingParkLForm,
    'i-i-s-carsharing-rent-l': IISCarsharingRentLForm,
    'i-i-s-carsharing-car-e': IISCarsharingCarEForm,
    'i-i-s-carsharing-city-e': IISCarsharingCityEForm,
    'i-i-s-carsharing-park-e': IISCarsharingParkEForm,
    'i-i-s-carsharing-rent-e': IISCarsharingRentEForm
  },

});

export default translations;
