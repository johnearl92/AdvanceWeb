/**
* Created by ErnestCueva on 2/18/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
var Model;
(function (Model) {
    var Passenger = (function () {
        function Passenger(data) {
            this.id = data.id;
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.middlename = data.middlename;
            this.birthdate = data.birthdate;
            this.contactno = data.contactno;
            this.gender = data.gender;
            this.address = data.address;
            this.email = data.email;
        }
        return Passenger;
    })();
    Model.Passenger = Passenger;
})(Model || (Model = {}));
//# sourceMappingURL=PassengerModel.js.map
