/**
 * Created by ErnestCueva on 2/18/14.
 */
///<reference path='../../libs/angularjs/angular.d.ts' />

module Model{

    export class Passenger {

        id:number;
        firstname:string;
        lastname:string;
        middlename:string;
        birthdate:string;
        contactno:string;
        gender:string;
        address:string;
        email:string;

        constructor(data:any){
            this.id = data.id;
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.middlename = data.middlename;
            this.birthdate = data.birthdate;
            this.contactno = data.contactno;
            this.gender = data.gender;
            this.address = data.address;
            this.email = data.email;
        }

    }

}