import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import 'font-awesome/css/font-awesome.css';
import 'angular-material/angular-material.css';

import homeModule from './home';
import './app.scss';

angular.module('app', [
  uirouter,
  ngSanitize,
  ngAnimate,
  ngAria,
  ngMaterial,
  homeModule,
]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  }).hashPrefix('!');
});
angular.bootstrap(document, ['app']);
