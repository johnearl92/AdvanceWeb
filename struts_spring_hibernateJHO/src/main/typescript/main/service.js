///<reference path='../libs/angularjs/angular.d.ts' />
///<reference path='controller.ts' />
///<reference path='model.ts' />
///<reference path='service/sample/TestTodoService.ts' />
///<reference path='service/PassengerService.ts' />
///<reference path='service/PlaneSeatService.ts' />
'use strict';
var Module;
(function (Module) {
    /* ------------------------------------------------------------------------------------------
    * Base Module for all controllers and services
    * ------------------------------------------------------------------------------------------ */
    angular.module('base-module', ['base-service', 'base-controller'], function () {
    }).run(function ($rootScope, $routeParams) {
    });

    /* ------------------------------------------------------------------------------------------
    * Base Module for all factory service declarations
    * ------------------------------------------------------------------------------------------ */
    angular.module('base-service', [], function () {
    }).factory('testTodoService', function ($http) {
        return new sample.service.TestTodoService($http);
    }).factory("passengerService", function ($http) {
        return new Service.PassengerService($http);
    }).factory("planeService", function ($http) {
        return new Service.PlaneService($http);
    });

    /* ------------------------------------------------------------------------------------------
    * Base Module for all factory service declarations
    * ------------------------------------------------------------------------------------------ */
    angular.module('base-controller', ['base-service', 'ui.bootstrap'], function () {
    }).controller('testTodoController', sample.controller.TestTodoController).controller('PassengerController', Passenger.Controller).controller('PlaneSeatController', PlaneSeat.Controller);
})(Module || (Module = {}));
//# sourceMappingURL=service.js.map
