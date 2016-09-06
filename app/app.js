(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules
      'ui.router',

      // Third party modules
      'firebase',
      'ngAnimate',

      // Custom modules
      'app.sample'
    ])
    .run(runFunction);

  runFunction.$inject = []
  function runFunction() {

  }

})();
