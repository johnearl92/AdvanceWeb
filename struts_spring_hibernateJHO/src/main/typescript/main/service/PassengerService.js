/**
* Created by ErnestCueva on 2/18/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
///<reference path='../model/PassengerModel.ts' />
///<reference path='../model.ts' />
var Service;
(function (Service) {
    var PassengerService = (function () {
        function PassengerService($http) {
            this.$http = $http;
        }
        PassengerService.prototype.addPassenger = function (firstname, lastname, middlename, birthdate, contactno, address, gender, email) {
            var promise = this.$http.get("/struts_spring_hibernate/airline/addPassenger?firstname=" + firstname + "&lastname=" + lastname + "&middlename=" + middlename + "&birthdate=" + birthdate + "&contactno=" + contactno + "&address=" + address + "&gender=" + gender + "&email=" + email);
            var wrapped = {
                success: function (callback) {
                    promise.success(function (data, status, headers, config) {
                        callback(data, status, headers, config);
                        alert("Service: Successfully added!");
                        alert(data.status);
                        alert(data.email);
                    });
                },
                error: promise.error,
                then: promise.then
            };
            return wrapped;
        };

        PassengerService.prototype.searchAllPassengers = function () {
            var promise = this.$http.get("/struts_spring_hibernate/airline/searchAllPassengers");

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
        return PassengerService;
    })();
    Service.PassengerService = PassengerService;
})(Service || (Service = {}));
//# sourceMappingURL=PassengerService.js.map
