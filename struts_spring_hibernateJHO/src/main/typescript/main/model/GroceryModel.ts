/** --------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
///<reference path='../../libs/angularjs/angular.d.ts' />


/**
 * Created with JetBrains WebStorm.
 * User: Vincent Racaza
 * Date: 8/13/13
 * Time: 8:36 AM
 * Object used to store Grocery data
 */
module Model{

    export class GroceryList{
        groceries:Model.GroceryItems[];
        status: number;


        constructor(data:any){
            this.groceries = data.groceries;
            this.status = data.status;

        }
    }

    export class GroceryItems{
        date:string;
        isOpen:boolean;
        items:Model.Grocery[];


        constructor(data:any){
            this.date = data.date;
            this.isOpen = data.isOpen;
            this.items = data.items;
        }
    }

    export class Grocery{
        id:number;
        itemName:string;
        status:boolean;
        editable:boolean;

        constructor(data:any){
            this.id = data.id;
            this.itemName = data.itemName;
            this.status = data.status;
            this.editable = data.editable;
        }

    }
}