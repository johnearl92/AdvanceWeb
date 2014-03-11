/**
* Created by ErnestCueva on 2/18/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
///<reference path='../model/PassengerModel.ts' />
///<reference path='../service.ts' />
var Passenger;
(function (Passenger) {
    var Controller = (function () {
        function Controller($scope, passengerService) {
            var _this = this;
            this.$scope = $scope;
            this.passengerService = passengerService;
            $scope.addPassenger = function (firstname, lastname, middlename, birthdate, contactno, address, gender, email) {
                return _this.addPassenger(firstname, lastname, middlename, birthdate, contactno, gender, address, email);
            };
            $scope.searchAllPassengers = function () {
                return _this.searchAllPassengers();
            };
            this.searchAllPassengers();
        }
        Controller.prototype.addPassenger = function (firstname, lastname, middlename, birthdate, contactno, address, gender, email) {
            var _this = this;
            //alert("Hello");
            this.passengerService.addPassenger(firstname, lastname, middlename, birthdate, contactno, address, gender, email).success(function (data, status, header, config) {
                /*alert(firstname);
                alert(lastname);
                alert(middlename);
                alert(birthdate);
                alert(contactno);
                alert(gender);
                alert(address);
                alert(email);*/
                _this.$scope.firstname = firstname;
                _this.$scope.lastname = lastname;
                _this.$scope.middlename = middlename;
                _this.$scope.birthdate = birthdate;
                _this.$scope.contactno = contactno;
                _this.$scope.gender = gender;
                _this.$scope.address = address;
                _this.$scope.email = email;
                //alert("Controller: Successfully added!");
                /*} else {
                this.$scope.errorMessage = 'Error on add.';
                alert(data.status);
                }*/
            });
        };

        Controller.prototype.searchAllPassengers = function () {
            var _this = this;
            this.passengerService.searchAllPassengers().success(function (data, status, header, config) {
                _this.$scope.list = data;
            });
        };
        return Controller;
    })();
    Passenger.Controller = Controller;
})(Passenger || (Passenger = {}));
//# sourceMappingURL=PassengerController.js.map
