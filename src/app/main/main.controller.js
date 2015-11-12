(function() {
  'use strict';

  angular
    .module("yo")
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {
    toastr.info('请填写正确的手机号', 'Information');
  }
})();