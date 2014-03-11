///<reference path='../../../libs/angularjs/angular.d.ts' />

///<reference path='../../service.ts' />
///<reference path='../../model.ts' />

module sample.controller {

    /**
     * AngularJS $scope wrapper interface. This is to extend the 
     * capabilities of the default definition of $scope without
     * affecting the framework, and for easier mocking of the 
     * target controller during unit testing.
     */
	export interface CustomScope extends ng.IScope {
		/** New Todo item Created Date. Format should be in yyyymmdd */
		createdDate:string;

		/** New Todo item to add. */
		todo:string;

		/** Creator of the new todo item */
		createdBy:string;

		/** Current list of Todos */
		todos:sample.model.TestTodoModel[];

		/**
		 * Adds an item to the current list of Todos.
		 */
		add:()=>void;
	}

	/**
	 * Sample Todo Controller.
	 */
	export class TestTodoController {

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
		constructor(public $scope:CustomScope, public $window:ng.IWindowService,
						public testTodoService:sample.service.TestTodoService) {
			console.log('testTodoController constructor invoked');

			/* Link defined methods in injected scope with local method implementations. */
			this.$scope.add = () => this.add();

			/* Retrieve current list of todos from server. */
			this.testTodoService.getTodo(null).success(
				(todos:sample.model.TestTodoModel[]) => {
					// repopulate todo list in current scope
					this.$scope.todos = todos;
				}
			);

			console.log('testTodoController constructor end');
		}

		/**
		 * Adds an item to the current list of Todos.
		 * This method uses $scope items: createdBy, todo, createdDate
		 */
		add():void {
			console.log('testTodoController.add invoke');

			/* If no defined created date, use current date */
			if (this.$scope.createdDate == undefined) {
				var date = new Date();
				this.$scope.createdDate =
					date.getFullYear() + "" + date.getMonth() + "" + date.getDate();
			}

			var tTodo = new sample.model.TestTodoModel(
							this.$scope.createdDate,
							this.$scope.todo,
							this.$scope.createdBy);

			this.testTodoService.add(tTodo).success(
				(todos:sample.model.TestTodoModel[]) => {
					// repopulate todo list in current scope
					this.$scope.todos = todos;
				}
			);

			console.log('testTodoController.add end');
		}

	}
}