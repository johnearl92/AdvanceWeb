///<reference path='../libs/angularjs/angular.d.ts' />

///<reference path='controller.ts' />
///<reference path='model.ts' />

///<reference path='service/sample/TestTodoService.ts' />
///<reference path='service/PassengerService.ts' />
///<reference path='service/PlaneSeatService.ts' />



'use strict';

module Module {

	/* ------------------------------------------------------------------------------------------
	 * Base Module for all controllers and services
	 * ------------------------------------------------------------------------------------------ */
	angular.module(
		'base-module',
		['base-service', 'base-controller'],
		()=> {}
	)
	// モジュールとして登録する。angular.module() -> .config() -> .run() で1セット。
	.run(($rootScope:ng.IRootScopeService, $routeParams:ng.IRouteParamsService)=> {
	});


	/* ------------------------------------------------------------------------------------------
	 * Base Module for all factory service declarations
	 * ------------------------------------------------------------------------------------------ */
	angular.module(
		'base-service',
		[],
		()=>{}
	)
	.factory('testTodoService', ($http:ng.IHttpService):sample.service.TestTodoService=> {
		return new sample.service.TestTodoService($http);
	})
    .factory("passengerService", ($http:ng.IHttpService):Service.PassengerService=> {
        return new Service.PassengerService($http);
    })
    .factory("planeService", ($http:ng.IHttpService):Service.PlaneService=> {
         return new Service.PlaneService($http);
     })
    ;


	/* ------------------------------------------------------------------------------------------
	 * Base Module for all factory service declarations
	 * ------------------------------------------------------------------------------------------ */
	angular.module(
		'base-controller',
		['base-service', 'ui.bootstrap'],
		()=>{}
	)
	.controller('testTodoController', sample.controller.TestTodoController)
    .controller('PassengerController', Passenger.Controller)
    .controller('PlaneSeatController', PlaneSeat.Controller)
    ;



}