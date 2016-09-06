(function() {
  'use strict';

  angular
    .module('app.sample')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    // State
    $stateProvider

      // Sample
      .state('sample', {
        url: '/sample',
        templateUrl: 'app/components/sample/sample.tpl.html',
        controller: 'sampleCtrl',
        controllerAs: 'vm'
      });
  }

})();
