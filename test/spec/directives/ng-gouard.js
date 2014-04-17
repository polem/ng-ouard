'use strict';

describe('Directive: ngGouard', function () {

  // load the directive's module
  beforeEach(module('ngOuardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-gouard></ng-gouard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngGouard directive');
  }));
});
