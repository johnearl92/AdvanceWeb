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
var Model;
(function (Model) {
    var GroceryList = (function () {
        function GroceryList(data) {
            this.groceries = data.groceries;
            this.status = data.status;
        }
        return GroceryList;
    })();
    Model.GroceryList = GroceryList;

    var GroceryItems = (function () {
        function GroceryItems(data) {
            this.date = data.date;
            this.isOpen = data.isOpen;
            this.items = data.items;
        }
        return GroceryItems;
    })();
    Model.GroceryItems = GroceryItems;

    var Grocery = (function () {
        function Grocery(data) {
            this.id = data.id;
            this.itemName = data.itemName;
            this.status = data.status;
            this.editable = data.editable;
        }
        return Grocery;
    })();
    Model.Grocery = Grocery;
})(Model || (Model = {}));
//# sourceMappingURL=GroceryModel.js.map
