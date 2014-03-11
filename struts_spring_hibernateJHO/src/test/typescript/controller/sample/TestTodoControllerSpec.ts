///<reference path='../../../../main/typescript/libs/qunit/qunit.d.ts' />
///<reference path='../../../../main/typescript/libs/sinon/sinon.d.ts' />

///<reference path='../../../../main/typescript/libs/angularjs/angular.d.ts' />
///<reference path='../../../../main/typescript/libs/angularjs/angular-mocks.d.ts' />

///<reference path='../../../../main/typescript/main/controller.ts' />


'use strict';

var $injector       : ng.auto.IInjectorService;

var $scope          : sample.controller.CustomScope;
var $controller     : ng.IControllerService;
var $window         : ng.IWindowService;
var $http           : ng.IHttpService;

var testTodoService : sample.service.TestTodoService;

QUnit.module('TestTodoController tests', {
	setup: function() {
		$injector       = angular.injector(['ngMock', 'base-service']);
        $controller     = $injector.get("$controller");
        $scope          = <any> $injector.get("$rootScope").$new();
        $http           = $injector.get("$http")
        testTodoService = new sample.service.TestTodoService($http);
	}
});

/* ====================================================================================================
 * TC0001
 * ==================================================================================================== */
test('tc0001_addTodo_expectsNoChange_whenNoInput', function() {
	console.log("========================================================================");
	console.log("Test Case: tc0001_addTodo_expectsNoChange_whenNoInput");
	console.log("========================================================================");

	/* Mock target service method to call using SinonJS. */
	var getCallback = sinon.stub(testTodoService, "getTodo");
	getCallback.returns({ "success": (callback) => { callback(undefined); } });

    var addCallback = sinon.stub(testTodoService, "add")
    addCallback.returns({ "success": (callback) => { callback(undefined); } });

    /* Setup $scope object */
    // Nothing to setup here. Moving on...

    /* Initialize target controller to test */
	var controller:sample.controller.TestTodoController =
    	$controller(sample.controller.TestTodoController,
    					{ $scope :$scope, $window :$window , testTodoService: testTodoService });

    /** Trigger function to test. */
	controller.add();

	/** End result should have no item added. */
	equal($scope.todos, undefined, 'no new item is added');
});


/* ====================================================================================================
 * TC0002
 * ==================================================================================================== */
test('tc0002_addTodo_expectsNoChange_whenOnlyMessage', function() {
	console.log("========================================================================");
	console.log("Test Case: tc0002_addTodo_expectsNoChange_whenOnlyMessage");
	console.log("========================================================================");

	/* Mock target service method to call using SinonJS. */
	var getCallback = sinon.stub(testTodoService, "getTodo");
	getCallback.returns({ "success": (callback) => { callback(undefined); } });

    var addCallback = sinon.stub(testTodoService, "add")
    addCallback.returns({ "success": (callback) => { callback(undefined); } });

    /* Setup $scope object */
    // Setup only todo. Leaving createdBy to null
    $scope.todo = "testTodo";

    /* Initialize target controller to test */
	var controller:sample.controller.TestTodoController =
    	$controller(sample.controller.TestTodoController,
    					{ $scope :$scope, $window :$window , testTodoService: testTodoService });

    /** Trigger function to test. */
	controller.add();

	/** End result should have no item added. */
	equal($scope.todos, undefined, 'no new item is added');
});


/* ====================================================================================================
 * TC0003
 * ==================================================================================================== */
test('tc0003_addTodo_expectsNoChange_whenOnlyCreatedBy', function() {
	console.log("========================================================================");
	console.log("Test Case: tc0003_addTodo_expectsNoChange_whenOnlyCreatedBy");
	console.log("========================================================================");

	/* Mock target service method to call using SinonJS. */
	var getCallback = sinon.stub(testTodoService, "getTodo");
	getCallback.returns({ "success": (callback) => { callback(undefined); } });

    var addCallback = sinon.stub(testTodoService, "add")
    addCallback.returns({ "success": (callback) => { callback(undefined); } });

    /* Setup $scope object */
    // Setup only createdBy. Leaving todo to null
    $scope.createdBy = "testTodo";

    /* Initialize target controller to test */
	var controller:sample.controller.TestTodoController =
    	$controller(sample.controller.TestTodoController,
    					{ $scope :$scope, $window :$window , testTodoService: testTodoService });

    /** Trigger function to test. */
	controller.add();

	/** End result should have no item added. */
	equal($scope.todos, undefined, 'no new item is added');
});


/* ====================================================================================================
 * TC0004
 * ==================================================================================================== */
test('tc0004_addTodo_expectsNoChange_whenNormalInputWithoutDate', function() {
	console.log("========================================================================");
	console.log("Test Case: tc0004_addTodo_expectsNoChange_whenNormalInputWithoutDate");
	console.log("========================================================================");

	/* Mock target service method to call using SinonJS. */
	var getCallback = sinon.stub(testTodoService, "getTodo");
	getCallback.returns({ "success": (callback) => { callback(undefined); } });

    var addCallback = sinon.stub(testTodoService, "add")
    addCallback.returns({
    	"success": (callback) => {
    		callback([
    			new sample.model.TestTodoModel("20130816", "Todo Item 1", "richard.go")
    		]);
    	}
    });

    /* Setup $scope object */
    // Define all required parameters
    $scope.todo        = "Todo Item 1";
    $scope.createdBy   = "richard.go";

    /* Initialize target controller to test */
	var controller:sample.controller.TestTodoController =
    	$controller(sample.controller.TestTodoController,
    					{ $scope :$scope, $window :$window , testTodoService: testTodoService });

    /** Trigger function to test. */
	controller.add();

	/** End result should have 1 item added. */
	equal($scope.todos.length, 1, 'a new item is added');
});


/* ====================================================================================================
 * TC0005
 * ==================================================================================================== */
test('tc0005_addTodo_expectsNoChange_whenNormalCompleteInput', function() {
	console.log("========================================================================");
	console.log("Test Case: tc0005_addTodo_expectsNoChange_whenNormalCompleteInput");
	console.log("========================================================================");

	/* Mock target service method to call using SinonJS. */
	var getCallback = sinon.stub(testTodoService, "getTodo");
	getCallback.returns({ "success": (callback) => { callback(undefined); } });

    var addCallback = sinon.stub(testTodoService, "add")
    addCallback.returns({
    	"success": (callback) => {
    		callback([
    			new sample.model.TestTodoModel("20130816", "Todo Item 1", "richard.go")
    		]);
    	}
    });

    /* Setup $scope object */
    // Define all required parameters
    $scope.todo        = "Todo Item 1";
    $scope.createdBy   = "richard.go";
    $scope.createdDate = "20130816";

    /* Initialize target controller to test */
	var controller:sample.controller.TestTodoController =
    	$controller(sample.controller.TestTodoController,
    					{ $scope :$scope, $window :$window , testTodoService: testTodoService });

    /** Trigger function to test. */
	controller.add();

	/** End result should have 1 item added. */
	equal($scope.todos.length, 1, 'a new item is added');
});