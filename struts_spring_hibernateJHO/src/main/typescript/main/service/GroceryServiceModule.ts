/** --------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/GroceryModel.ts' />

'use strict';
/**
 * Created with JetBrains WebStorm.
 * User: Vincent Racaza
 * Date: 8/13/13
 * Time: 8:36 AM
 * Description: The service module which passes request to the server and accepts response
 */
module Service {

    export class GroceryService {
        constructor(public $http:ng.IHttpService) {
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Sends request to the server for all the list of data
         * @return ng.IHttpPromise
         */
        getList():ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/getList");
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

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Sends request to the server for editing an item
         * @return ng.IHttpPromise
         */
        edit(id:number, itemName:string):ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/update?id="+id+"&itemName="+itemName);
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

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Sends request to the server for deleting an item
         * @return ng.IHttpPromise
         */
        delete(id:number, date:string):ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/delete?id="+id+"&itemDate="+date);
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

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Sends request to the server for changing the status of an item
         * @return ng.IHttpPromise
         */
        changeStatus(id:number, status:boolean, editable:boolean):ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/updateStatus?id="+id+"&itemStatus="+status+"&editable="+editable);
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

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Sends request to the server for adding an item
         * @return ng.IHttpPromise
         */
        add(itemName:string, date:string):ng.IHttpPromise {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/add?itemDate="+date+"&name="+itemName);
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
