import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-carsharing-car-l');
  this.route('i-i-s-carsharing-car-e',
  { path: 'i-i-s-carsharing-car-e/:id' });
  this.route('i-i-s-carsharing-car-e.new',
  { path: 'i-i-s-carsharing-car-e/new' });
  this.route('i-i-s-carsharing-city-l');
  this.route('i-i-s-carsharing-city-e',
  { path: 'i-i-s-carsharing-city-e/:id' });
  this.route('i-i-s-carsharing-city-e.new',
  { path: 'i-i-s-carsharing-city-e/new' });
  this.route('i-i-s-carsharing-park-l');
  this.route('i-i-s-carsharing-park-e',
  { path: 'i-i-s-carsharing-park-e/:id' });
  this.route('i-i-s-carsharing-park-e.new',
  { path: 'i-i-s-carsharing-park-e/new' });
  this.route('i-i-s-carsharing-rent-l');
  this.route('i-i-s-carsharing-rent-e',
  { path: 'i-i-s-carsharing-rent-e/:id' });
  this.route('i-i-s-carsharing-rent-e.new',
  { path: 'i-i-s-carsharing-rent-e/new' });
});

export default Router;
