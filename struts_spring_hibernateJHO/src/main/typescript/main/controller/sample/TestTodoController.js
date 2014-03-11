///<reference path='../../../libs/angularjs/angular.d.ts' />
var sample;
(function (sample) {
    ///<reference path='../../service.ts' />
    ///<reference path='../../model.ts' />
    (function (controller) {
        

        /**
        * Sample Todo Controller.
        */
        var TestTodoController = (function () {
            /**
            * Default contructor of the defined class.
            * Parameters of the contructor are automatically injected via dependency injection
            * of AngularJS.
            * Parameter names are matched to what is defined in service.ts declarations.
            *
            * @param $scope - angularJS scope
            * @param $window - angularJS window instance
            * @param testTodoService - corresponding service layer for this controller.
            */
            function TestTodoController($scope, $window, testTodoService) {
                var _this = this;
                this.$scope = $scope;
                this.$window = $window;
                this.testTodoService = testTodoService;
                console.log('testTodoController constructor invoked');

                /* Link defined methods in injected scope with local method implementations. */
                this.$scope.add = function () {
                    return _this.add();
                };

                /* Retrieve current list of todos from server. */
                this.testTodoService.getTodo(null).success(function (todos) {
                    // repopulate todo list in current scope
                    _this.$scope.todos = todos;
                });

                console.log('testTodoController constructor end');
            }
            /**
            * Adds an item to the current list of Todos.
            * This method uses $scope items: createdBy, todo, createdDate
            */
            TestTodoController.prototype.add = function () {
                var _this = this;
                console.log('testTodoController.add invoke');

                /* If no defined created date, use current date */
                if (this.$scope.createdDate == undefined) {
                    var date = new Date();
                    this.$scope.createdDate = date.getFullYear() + "" + date.getMonth() + "" + date.getDate();
                }

                var tTodo = new sample.model.TestTodoModel(this.$scope.createdDate, this.$scope.todo, this.$scope.createdBy);

                this.testTodoService.add(tTodo).success(function (todos) {
                    // repopulate todo list in current scope
                    _this.$scope.todos = todos;
                });

                console.log('testTodoController.add end');
            };
            return TestTodoController;
        })();
        controller.TestTodoController = TestTodoController;
    })(sample.controller || (sample.controller = {}));
    var controller = sample.controller;
})(sample || (sample = {}));
//# sourceMappingURL=TestTodoController.js.map
