/**
 * Created by ErnestCueva on 2/18/14.
 */

///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/PassengerModel.ts' />
///<reference path='../model.ts' />

module Service{

    export class PassengerService {
        constructor(public $http:ng.IHttpService) {
        }

        addPassenger(firstname:string, lastname:string, middlename:string, birthdate:string, contactno:string, address:string, gender:string, email:string):ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/airline/addPassenger?firstname=" +firstname+ "&lastname=" +lastname+ "&middlename=" +middlename+ "&birthdate=" +birthdate+ "&contactno=" +contactno+ "&address=" + address + "&gender=" +gender+ "&email=" + email);
            var wrapped:any = {
                success: (callback) => {
                    promise.success((data, status, headers, config) => {
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
        }

        searchAllPassengers():ng.IHttpPromise{

            var promise = this.$http.get("/struts_spring_hibernate/airline/searchAllPassengers");

            var wrapped:any = {
                success: (callback) => {
                    promise.success((data, status, headers, config) => {
                        callback(data, status, headers, config);
                    });

                },
                error: promise.error,
                then: promise.then
            };
            return wrapped;
        }
    }
}