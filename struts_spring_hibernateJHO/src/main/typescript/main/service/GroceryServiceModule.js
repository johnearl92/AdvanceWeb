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
var Service;
(function (Service) {
    var GroceryService = (function () {
        function GroceryService($http) {
            this.$http = $http;
        }
        /**
        * @author Vincent Racaza
        * @version 001
        * @description Sends request to the server for all the list of data
        * @return ng.IHttpPromise
        */
        GroceryService.prototype.getList = function () {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/getList");
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

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Sends request to the server for editing an item
        * @return ng.IHttpPromise
        */
        GroceryService.prototype.edit = function (id, itemName) {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/update?id=" + id + "&itemName=" + itemName);
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

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Sends request to the server for deleting an item
        * @return ng.IHttpPromise
        */
        GroceryService.prototype.delete = function (id, date) {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/delete?id=" + id + "&itemDate=" + date);
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

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Sends request to the server for changing the status of an item
        * @return ng.IHttpPromise
        */
        GroceryService.prototype.changeStatus = function (id, status, editable) {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/updateStatus?id=" + id + "&itemStatus=" + status + "&editable=" + editable);
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

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Sends request to the server for adding an item
        * @return ng.IHttpPromise
        */
        GroceryService.prototype.add = function (itemName, date) {
            var promise = this.$http.get("/struts_spring_hibernate/grocery/add?itemDate=" + date + "&name=" + itemName);
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
        return GroceryService;
    })();
    Service.GroceryService = GroceryService;
})(Service || (Service = {}));
//# sourceMappingURL=GroceryServiceModule.js.map
