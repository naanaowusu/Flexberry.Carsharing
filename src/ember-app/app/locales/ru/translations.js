import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Carsharing',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Carsharing',
          title: 'Carsharing'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
