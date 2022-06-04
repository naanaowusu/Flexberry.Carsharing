import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.carsharing.caption'),
          title: i18n.t('forms.application.sitemap.carsharing.title'),
          children: [{
            link: 'i-i-s-carsharing-park-l',
            caption: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-park-l.caption'),
            title: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-park-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-carsharing-rent-l',
            caption: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-rent-l.caption'),
            title: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-rent-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-carsharing-city-l',
            caption: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-city-l.caption'),
            title: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-city-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-carsharing-car-l',
            caption: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-car-l.caption'),
            title: i18n.t('forms.application.sitemap.carsharing.i-i-s-carsharing-car-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})