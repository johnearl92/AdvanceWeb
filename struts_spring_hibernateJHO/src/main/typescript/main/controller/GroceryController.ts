
/** --------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/GroceryModel.ts' />
///<reference path='../service/GroceryServiceModule.ts' />
///<reference path='../service.ts' />

/**
 * Created with JetBrains WebStorm.
 * User: User-Hp002
 * Date: 8/13/13
 * Time: 8:36 AM
 * Module used for page element manipulation
 */
module Grocery{
    /**
     * @author Vincent Racaza
     * @version 001
     * @description Object that is binded to page elements
     */
    export interface Scope extends ng.IScope{

        oneAtATime:boolean;
        list:Model.GroceryItems[];
        dt:any;
        showWeeks:any;
        minDate:any;
        opened:boolean;
        dateOptions:any;
        grocery:string;
        errorMessage:string;
        errorMessage2:string;

        getList:()=>void;
        editOnClick:(id:number, editable:boolean) => void;
        editOnSave:(id:number, editable:boolean, itemName:string) => void;
        delete:(id:number, date:any) => void;
        changeStatus:(id:number, status:boolean, editable:boolean) => void;
        add:(itemName:string, date:any) => void;

        today:()=>void;
        toggleMin:()=>void;
        open:()=>void;

    }

    /**
     * @author Vincent Racaza
     * @version 001
     * @description Handled all events and behavior of the page
     */
    export class Controller{
        /**
         * @author Vincent Racaza
         * @version 001
         * @description Constructor of Controller
         * @param $scope Contains the page elements
         */
            constructor(public $scope:Scope, public groceryService:Service.GroceryService, public $timeout:ng.ITimeoutService){
            $scope.oneAtATime = true;

            $scope.getList = () => this.getList();
            $scope.editOnClick = (id:number, editable:boolean) => this.editOnClick(id, editable);
            $scope.editOnSave = (id:number, editable:boolean, itemName:string) => this.editOnSave(id, editable, itemName);
            $scope.delete = (id:number, date:any) => this.delete(id, date);
            $scope.changeStatus = (id:number, status:boolean, editable:boolean) => this.changeStatus(id, status, editable);
            $scope.add = (itemName:string, date:any) => this.add(itemName, date);

            $scope.today = () => this.today();
            $scope.toggleMin = () => this.toggleMin();
            $scope.open = () => this.open();

            this.getList();

            this.$scope.dateOptions = {
                'year-format': "'yy'",
                'starting-day': 0
            };

            this.$scope.today();
            this. $scope.showWeeks = true;
            this.$scope.toggleMin();

        }

        /**
         * @author Vincent Racaza
         * @description Retrieves all the data from the service layer
         */
        getList():void{
            this.groceryService.getList()
                .success((data:Model.GroceryList, status, header, config) => {
                    if(1 == data.status) {
                        this.$scope.list = data.groceries;
                    } else {
                        this.$scope.errorMessage = "Error on getList.";
                    }
            });

        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Changes the UI during edit
         */
        editOnClick(id:number, editable:boolean):void{
            this.cleanErrorMessage();

            for(var index:number = 0; index < this.$scope.list.length; index++) {
                for(var index2:number = 0; index2 < this.$scope.list[index].items.length; index2++) {
                      if(id == this.$scope.list[index].items[index2].id) {
                          this.$scope.list[index].items[index2].editable = true;
                      }
                }
            }
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Saving the edited item
         */
        editOnSave(id:number, editable:boolean, itemName:string):void{
            this.cleanErrorMessage();
            var stat:number;

            if(itemName == undefined || itemName == '') {
                this.$scope.errorMessage = 'Item name must not be blank.';
            } else {
               
                    this.groceryService.edit(id, itemName)
                        .success((data : Model.GroceryList, status, headers, config) => {

                             if(1 == data.status) {
                                this.$scope.list = data.groceries;
                             }else{
                                this.$scope.errorMessage = "Error on edit.";
                             }

                    });
                       
            }
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Deletion of a grocery item.
         */
        delete(id:number, date:any):void{
            this.cleanErrorMessage();

            var stat:number;
            
            this.groceryService.delete(id, date)
                .success((data : Model.GroceryList, status, headers, config) => {

                    if(1 == data.status) {
                        this.$scope.list = data.groceries;
					}else{
						  this.$scope.errorMessage = 'Error on delete. Status:' +stat;
					}
            });
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Changing the status of a grocery item
         */
        changeStatus(id:number, status:boolean, editable:boolean):void{
            this.cleanErrorMessage();

            var stat:number;
            this.groceryService.changeStatus(id, status, editable)
                .success((data : Model.GroceryList, status, headers, config) => {

                     if(1 == data.status) {
                        this.$scope.list = data.groceries;
                     }else {
						this.$scope.errorMessage = 'Error on changing grocery status. Status:' +stat;
					}
                });

        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Adding a grocery item.
         */
        add(itemName:string, date:any):void {
            this.cleanErrorMessage();

            var success:boolean = true;

            if(itemName == undefined || itemName == '') {
                this.$scope.errorMessage2 = 'Item name must not be blank.';
                success = false;
            }

            var result:boolean;

            var convertedDate:string;

            if(date != undefined && date != '') {
                convertedDate= this.convertDate(date);
                var patt:RegExp= new RegExp("^(((0[13578]|1[02])/(0[1-9]|[12]\\d|3[01])/((19|[2-9]\\d)\d{2}))|((0[13456789]|1[012])/(0[1-9]|[12]\\d|30)/((19|[2-9]\\d)\\d{2}))|(02/(0[1-9]|1\\d|2[0-8])/((19|[2-9]\\d)\\d{2}))|(02/29/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$");
                result = patt.test(convertedDate);
            }

            var dateNow:string = this.convertDate(new Date());

            if(date == undefined || date == '' || result == false || convertedDate < dateNow) {
                this.$scope.errorMessage = 'Date must be in MM/dd/yyy format and must be equal or greater than the date today.';
                success = false;
            }

            if(success == true) {
                this.groceryService.add(itemName, convertedDate)
                    .success((data:any, status, header, config) => {
                        if(data.status == 1) {
                            this.$scope.list = data.groceries;
                            this.$scope.grocery = '';
                        } else {
                               this.$scope.errorMessage = 'Error on add. Status: ' +data.status;
                        }
                });
             }
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Date conversion to MM/dd/yyyy format
         */
        convertDate(date:any):string {
             var mon:any = date.getMonth() + 1;
             var day:any = date.getDate();

            if(mon < 10) {
                mon = '0' + mon;
            }

            if(day < 10) {
                day = '0' + day;
            }

            return [mon, day, date.getFullYear()].join('/')
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Assigns a new date.
         */
        today():void {
            this.$scope.dt = new Date();
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Assigns a minimum date
         */
        toggleMin():void {
            this.$scope.minDate = ( this.$scope.minDate ) ? null : new Date();
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Opens a date picker
         */
        open():void {
            this.$timeout (() => {
                this.$scope.opened = true;
            });
        }

        /**
         * @author Vincent Racaza
         * @version 001
         * @description Clearing all error messages
         */
        cleanErrorMessage():void {
            this.$scope.errorMessage = '';
            this.$scope.errorMessage2 = '';
        }

    }
}