///<reference path='../../../libs/angularjs/angular.d.ts' />

///<reference path='../../model.ts' />

module sample.service {

	/**
	 * Sample service layer implementation.
	 */
	export class TestTodoService {

		/**
		 * Default contructor for the service class.
		 * Similar with the controller class, parameters are automatically injected.
		 * @param $http - http interface of AngularJS for ajax requests.
		 */ 
		constructor(public $http:ng.IHttpService) { }

		/**
		 * Adds a new todo item to the target server data storage.
		 * @param todo - new todo item to add.
		 */
		add(todo:sample.model.TestTodoModel):ng.IHttpPromise {
			var promise = this.$http.post("/struts_spring_hibernate/sample/post", todo.getJson());
            var wrapped:any = {
                success: (callback:any) => {
                    promise.success((data, status, headers, config) => {
                        var resultList:sample.model.TestTodoModel[] = [];
                        data.forEach((data)=> {
                            resultList.push(new sample.model.TestTodoModel(data.date, data.message, data.createdBy));
                        });
                        callback(resultList, status, headers, config);
                    });
                },
                error: promise.error,
                then: promise.then
            };
            return wrapped;
		}


		/**
		 * Retrieves data from a target server data storage.
		 * @param filter - (optional) if specified, the specified object will be used as filter
		 */
		getTodo(filter:sample.model.TestTodoModel):ng.IHttpPromise {
			var promise = this.$http.get("/struts_spring_hibernate/sample/list");
            var wrapped:any = {
                success: (callback:any) => {
                    promise.success((data, status, headers, config) => {
                        var resultList:sample.model.TestTodoModel[] = [];
                        data.forEach((data)=> {
                            resultList.push(new sample.model.TestTodoModel(data.date, data.message, data.createdBy));
                        });
                        callback(resultList, status, headers, config);
                    });
                },
                error: promise.error,
                then: promise.then
            };
            return wrapped;
		}
	}
}