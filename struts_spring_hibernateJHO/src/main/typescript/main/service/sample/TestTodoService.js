///<reference path='../../../libs/angularjs/angular.d.ts' />
var sample;
(function (sample) {
    ///<reference path='../../model.ts' />
    (function (service) {
        /**
        * Sample service layer implementation.
        */
        var TestTodoService = (function () {
            /**
            * Default contructor for the service class.
            * Similar with the controller class, parameters are automatically injected.
            * @param $http - http interface of AngularJS for ajax requests.
            */
            function TestTodoService($http) {
                this.$http = $http;
            }
            /**
            * Adds a new todo item to the target server data storage.
            * @param todo - new todo item to add.
            */
            TestTodoService.prototype.add = function (todo) {
                var promise = this.$http.post("/struts_spring_hibernate/sample/post", todo.getJson());
                var wrapped = {
                    success: function (callback) {
                        promise.success(function (data, status, headers, config) {
                            var resultList = [];
                            data.forEach(function (data) {
                                resultList.push(new sample.model.TestTodoModel(data.date, data.message, data.createdBy));
                            });
                            callback(resultList, status, headers, config);
                        });
                    },
                    error: promise.error,
                    then: promise.then
                };
                return wrapped;
            };

            /**
            * Retrieves data from a target server data storage.
            * @param filter - (optional) if specified, the specified object will be used as filter
            */
            TestTodoService.prototype.getTodo = function (filter) {
                var promise = this.$http.get("/struts_spring_hibernate/sample/list");
                var wrapped = {
                    success: function (callback) {
                        promise.success(function (data, status, headers, config) {
                            var resultList = [];
                            data.forEach(function (data) {
                                resultList.push(new sample.model.TestTodoModel(data.date, data.message, data.createdBy));
                            });
                            callback(resultList, status, headers, config);
                        });
                    },
                    error: promise.error,
                    then: promise.then
                };
                return wrapped;
            };
            return TestTodoService;
        })();
        service.TestTodoService = TestTodoService;
    })(sample.service || (sample.service = {}));
    var service = sample.service;
})(sample || (sample = {}));
//# sourceMappingURL=TestTodoService.js.map
