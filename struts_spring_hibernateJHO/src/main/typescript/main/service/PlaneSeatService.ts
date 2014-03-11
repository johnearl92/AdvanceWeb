/**
 * Created by OneTeraByteDesu on 2/25/14.
 */

///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/PlaneSeatModel.ts' />

module Service{

    export class PlaneService{
        constructor(public $http:ng.IHttpService) {

        }


        getP():ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/airline/getPlanes");
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

        saveReservation(planeID:number,seatNo:string,name:string):ng.IHttpPromise{
            var promise = this.$http.get("/struts_spring_hibernate/airline/saveReservation?planeID="+planeID+"&seatNo="+seatNo+"&name="+name);
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
