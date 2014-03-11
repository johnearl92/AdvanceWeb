/**
* Created by OneTeraByteDesu on 2/25/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
///<reference path='../model/PlaneSeatModel.ts' />
var Service;
(function (Service) {
    var PlaneService = (function () {
        function PlaneService($http) {
            this.$http = $http;
        }
        PlaneService.prototype.getP = function () {
            var promise = this.$http.get("/struts_spring_hibernate/airline/getPlanes");
            var wrapped = {
                success: function (callback) {
                    promise.success(function (data, status, headers, config) {
                        callback(data, status, headers, config);
                    });
                },
                error: promise.error,
                then: promise.then
            };
            return wrapped;
        };
        return PlaneService;
    })();
    Service.PlaneService = PlaneService;
})(Service || (Service = {}));
//# sourceMappingURL=PlaneSeatService.js.map
