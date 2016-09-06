(function() {
  'use strict';

  angular
    .module('app.sample')
    .directive('sampleDirective', sampleDirective);

  function sampleDirective() {

    return {
      templateUrl: '',
      restrict: '',
      controller: '',
      controllerAs: 'vm',
      scope: {

      }
    };
  }

})();
