///<reference path='../../../../main/typescript/libs/qunit/qunit.d.ts' />
///<reference path='../../../../main/typescript/libs/sinon/sinon.d.ts' />
///<reference path='../../../../main/typescript/libs/angularjs/angular.d.ts' />
///<reference path='../../../../main/typescript/libs/angularjs/angular-mocks.d.ts' />
///<reference path='../../../../main/typescript/main/controller.ts' />
'use strict';
var $injector;

var $scope;
var $controller;
var $window;
var $http;

QUnit.module('TestTodoService tests', {
    setup: function () {
        $injector = angular.injector(['ngMock', 'base-service']);
        $controller = $injector.get("$controller");
        $scope = $injector.get("$rootScope").$new();
        $http = $injector.get("$http");
    }
});

/* ====================================================================================================
* TC0001
* ==================================================================================================== */
test('tc0001_add_expectsNoChange_whenNoInput', function () {
    console.log("========================================================================");
    console.log("Test Case: tc0001_addTodo_expectsNoChange_whenNoInput");
    console.log("========================================================================");

    /* Mock target service method to call using SinonJS. */
    var getCallback = sinon.stub(testTodoService, "getTodo");
    getCallback.returns({ "success": function (callback) {
            callback(undefined);
        } });

    var addCallback = sinon.stub(testTodoService, "add");
    addCallback.returns({ "success": function (callback) {
            callback(undefined);
        } });

    /* Setup $scope object */
    // Nothing to setup here. Moving on...
    /* Initialize target controller to test */
    var controller = $controller(sample.controller.TestTodoController, { $scope: $scope, $window: $window, testTodoService: testTodoService });

    /** Trigger function to test. */
    controller.add();

    /** End result should have no item added. */
    equal($scope.todos, undefined, 'no new item is added');
});
//# sourceMappingURL=TestTodoServiceSpec.js.map
