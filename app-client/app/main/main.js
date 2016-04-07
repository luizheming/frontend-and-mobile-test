'use strict';
angular.module('main', ['ionic'
  , 'ngCordova'
  , 'ui.router'
  ])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'main/templates/list.html',
      controller: 'masterCtrl'
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: 'main/templates/detail.html',
      controller: 'detailCtrl'
    });

  $locationProvider.html5Mode(true);
});
