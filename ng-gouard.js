'use strict';

angular.module('ngOuardApp')
  .directive('ngGouard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.html('<img src="http://www.lanetscouade.com/sites/default/files/styles/profile_user_view/public/nicolas.png" alt="ng-gouard"/>');
      }
    };
  });
