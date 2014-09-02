'use strict';

angular.module('fact-followers', ['fact-followers.controllers'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
  .when('/feed', {
    templateUrl: '/views/feed.html',
    controller: 'feedController'
  })
  .when('/detail', {
    templateUrl: '/views/detail.html',
    controller: 'detailController'
  })
  .when('/journalist/home', {
    templateUrl: '/views/wizard/main.html',
    controller: 'homeController'
  })
  .when('/journalist/facts/create', {
    templateUrl: '/views/wizard/fact/create.html',
    controller: 'createFactController'
  })
  .when('/journalist/facts/validate', {
    templateUrl: '/views/wizard/fact/validate.html',
    controller: 'validateFactController'
  })
  .when('/journalist/article/compose', {
    templateUrl: '/views/wizard/article/compose.html',
    controller: 'composeController'
  })
  .when('/journalist/article/broadcast', {
    templateUrl: '/views/wizard/article/broadcast.html',
    controller: 'composeController'
  })
  .when('/journalist/article/thanks', {
    templateUrl: '/views/wizard/article/thanks.html',
    controller: 'thanksController'
  })
  .when('/journalist/article/url', {
    templateUrl: '/views/wizard/article/thanks-url.html',
    controller: 'thanksUrlController'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(function ($rootScope) {
    moment().lang('es');
  });
