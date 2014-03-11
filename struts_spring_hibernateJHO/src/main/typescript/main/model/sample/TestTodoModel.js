///<reference path='../../../libs/angularjs/angular.d.ts' />
var sample;
(function (sample) {
    (function (model) {
        /**
        * Sample Model class.
        */
        var TestTodoModel = (function () {
            /**
            * Default constructor for the model class.
            * @param date - date created
            * @param message - message to add
            * @param createdBy - item creator
            */
            function TestTodoModel(date, message, createdBy) {
                this.date = date;
                this.message = message;
                this.createdBy = createdBy;
            }
            /**
            * Creates a JSON object of the current class contents.
            * @returns JSON Object
            */
            TestTodoModel.prototype.getJson = function () {
                return {
                    'date': this.date,
                    'message': this.message,
                    'createdBy': this.createdBy
                };
            };
            return TestTodoModel;
        })();
        model.TestTodoModel = TestTodoModel;
    })(sample.model || (sample.model = {}));
    var model = sample.model;
})(sample || (sample = {}));
//# sourceMappingURL=TestTodoModel.js.map
