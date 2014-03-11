
/**
 * Created by ErnestCueva on 2/18/14.
 */

///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/PassengerModel.ts' />
///<reference path='../service.ts' />

module Passenger{

    export interface Scope extends ng.IScope{

        firstname:string;
        lastname:string;
        middlename:string;
        birthdate:string;
        contactno:string;
        gender:string;
        address:string;
        email:string;
        years:number;
        tabdesu:boolean;

        errorMessage:string;
        errorMessage1:string;
        errorMessage2:string;
        errorMessage3:string;
        errorMessage4:string;
        errorMessage5:string;
        errorMessage6:string;
        errorMessage7:string;
        errorMessage8:string;

        passenger:Model.Passenger;
        list:any;
        searchAllPassengers:()=>void;
        data:string;


        addPassenger:(firstname:string, lastname:string, middlename:string, birthdate:string, contactno:string, address:string, gender:string, email:string)=>void;
    }

    export class Controller{

        constructor(public $scope:Scope, public passengerService:Service.PassengerService){
            $scope.addPassenger=(firstname:string, lastname:string, middlename:string, birthdate:string, contactno:string, address:string, gender:string, email:string) => this.addPassenger(firstname, lastname, middlename, birthdate, contactno, address, gender, email);
            $scope.searchAllPassengers=()=>this.searchAllPassengers();
            this.searchAllPassengers();
            this.$scope.tabdesu=false;
        }

        addPassenger(firstname:string, lastname:string, middlename:string, birthdate:string, contactno:string, address:string, gender:string, email:string):void{
            this.cleanErrorMessage();
            var success:boolean = true;
            /*var regExForDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

            var test = regExForDate.test(birthdate);
            alert(test + "");*/

            /*var trigger = "2",
                regexp = new RegExp('^[1-9]\d{0,2}$'),
                test = regexp.test(trigger);
            alert(test + "");*/

            var dateNow:any = Date.now();
            var convertedDate:string;
            convertedDate= this.convertDate(new Date(birthdate));
            this.GetDiffDate(convertedDate,dateNow);


            if(firstname == undefined || firstname == ''){
                this.$scope.errorMessage1 = 'First name must not be blank.';
                success = false;
            }

            if(middlename == undefined || middlename == ''){
                this.$scope.errorMessage2 = 'Middle name must not be blank.';
                success = false;
            }

            if(lastname == undefined || lastname == ''){
                this.$scope.errorMessage3 = 'Last name must not be blank.';
                success = false;
            }

            if(email == undefined || email == ''){
                this.$scope.errorMessage4 = 'Email must not be blank.';
                success = false;
            }

            if(birthdate == undefined || birthdate == ''){
                this.$scope.errorMessage5 = 'Birthdate must not be blank.';
                success = false;
            }

            if(gender == undefined || gender == ''){
                this.$scope.errorMessage6 = 'Gender must not be blank.';
                success = false;
            }

            if(contactno == undefined || contactno == ''){
                this.$scope.errorMessage7 = 'Contact no. must not be blank.';
                success = false;
            }

            if(address == undefined || address == ''){
                this.$scope.errorMessage8 = 'Address must not be blank.';
                success = false;
            }

            if(this.$scope.years < 18)
            {
                this.$scope.errorMessage5 = 'Passenger must not be below 18 years old.';
                success = false;
            }

            if(success == true){
                this.passengerService.addPassenger(firstname, lastname, middlename, birthdate, contactno, address, gender, email).success((data:any, status, header, config) => {
                    if(data.status == 1){
                        this.$scope.firstname = firstname;
                        this.$scope.lastname = lastname;
                        this.$scope.middlename = middlename;
                        this.$scope.birthdate = birthdate;
                        this.$scope.contactno = contactno;
                        this.$scope.gender = gender;
                        this.$scope.address = address;
                        this.$scope.email = email;
                        alert("Successfully added!");
                        this.searchAllPassengers();
                        this.$scope.tabdesu = true;
                    }
                    else {
                        this.$scope.errorMessage = 'Error on add.';
                        alert(data.status);
                    }
                });
            }
        }

        searchAllPassengers():void{
            this.passengerService.searchAllPassengers()
                .success((data,status, header, config) => {
                    this.$scope.list = data;
                });

        }

        cleanErrorMessage():void{
            this.$scope.errorMessage = '';
            this.$scope.errorMessage1 = '';
            this.$scope.errorMessage2 = '';
            this.$scope.errorMessage3 = '';
            this.$scope.errorMessage4 = '';
            this.$scope.errorMessage5 = '';
            this.$scope.errorMessage6 = '';
            this.$scope.errorMessage7 = '';
            this.$scope.errorMessage8 = '';
        }

        convertDate(date:any):string {
            var mon:any = date.getMonth() + 1;
            var day:any = date.getDate();

            if(mon < 10) {
                mon = '0' + mon;
            }

            if(day < 10) {
                day = '0' + day;
            }

            return [ date.getFullYear(),mon, day].join('-')
        }

        GetDiffDate(birthdate:any, datenow:any):void
        {
            var birthDate = new Date(birthdate);
            var otherDate = new Date(datenow);

            this.$scope.years = (otherDate.getFullYear() - birthDate.getFullYear());

            if (otherDate.getMonth() < birthDate.getMonth() ||
                otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
                this.$scope.years--;
            }

        }
    }
}