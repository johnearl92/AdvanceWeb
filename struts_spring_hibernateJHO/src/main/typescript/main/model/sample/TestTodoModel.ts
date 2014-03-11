///<reference path='../../../libs/angularjs/angular.d.ts' />

module sample.model {

	/**
	 * Sample Model class.
	 */
	export class TestTodoModel {

		/**
		 * Default constructor for the model class.
		 * @param date - date created
		 * @param message - message to add
		 * @param createdBy - item creator
		 */
		constructor(date:any, message:string, createdBy:string) {
			this.date = date;
			this.message = message;
			this.createdBy = createdBy;
		}

		/** Created date of the data. */
		date:string;

		/** Message of the data. */
		message:string;

		/** Creator of the data. */
		createdBy:string;

		/**
		 * Creates a JSON object of the current class contents.
		 * @returns JSON Object
		 */
		getJson():any {
			return {
				'date': this.date,
				'message' : this.message,
				'createdBy' : this.createdBy
			};
		}
	}
}