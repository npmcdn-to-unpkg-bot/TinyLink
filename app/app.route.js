(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    // 404
    $urlRouterProvider.otherwise('/#');
    // Index
    $urlRouterProvider.when('', '/');

    // States
    $stateProvider

      // Sample
      .state('sample', {
        url: '/#',
        templateUrl: 'app/components/sample/sample.tpl.html',
        controller: 'sampleCtrl',
        controllerAs: 'vm'
      });
  }

})();
