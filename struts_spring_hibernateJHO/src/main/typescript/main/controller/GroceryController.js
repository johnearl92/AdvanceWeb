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
var Grocery;
(function (Grocery) {
    

    /**
    * @author Vincent Racaza
    * @version 001
    * @description Handled all events and behavior of the page
    */
    var Controller = (function () {
        /**
        * @author Vincent Racaza
        * @version 001
        * @description Constructor of Controller
        * @param $scope Contains the page elements
        */
        function Controller($scope, groceryService, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.groceryService = groceryService;
            this.$timeout = $timeout;
            $scope.oneAtATime = true;

            $scope.getList = function () {
                return _this.getList();
            };
            $scope.editOnClick = function (id, editable) {
                return _this.editOnClick(id, editable);
            };
            $scope.editOnSave = function (id, editable, itemName) {
                return _this.editOnSave(id, editable, itemName);
            };
            $scope.delete = function (id, date) {
                return _this.delete(id, date);
            };
            $scope.changeStatus = function (id, status, editable) {
                return _this.changeStatus(id, status, editable);
            };
            $scope.add = function (itemName, date) {
                return _this.add(itemName, date);
            };

            $scope.today = function () {
                return _this.today();
            };
            $scope.toggleMin = function () {
                return _this.toggleMin();
            };
            $scope.open = function () {
                return _this.open();
            };

            this.getList();

            this.$scope.dateOptions = {
                'year-format': "'yy'",
                'starting-day': 0
            };

            this.$scope.today();
            this.$scope.showWeeks = true;
            this.$scope.toggleMin();
        }
        /**
        * @author Vincent Racaza
        * @description Retrieves all the data from the service layer
        */
        Controller.prototype.getList = function () {
            var _this = this;
            this.groceryService.getList().success(function (data, status, header, config) {
                if (1 == data.status) {
                    _this.$scope.list = data.groceries;
                } else {
                    _this.$scope.errorMessage = "Error on getList.";
                }
            });
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Changes the UI during edit
        */
        Controller.prototype.editOnClick = function (id, editable) {
            this.cleanErrorMessage();

            for (var index = 0; index < this.$scope.list.length; index++) {
                for (var index2 = 0; index2 < this.$scope.list[index].items.length; index2++) {
                    if (id == this.$scope.list[index].items[index2].id) {
                        this.$scope.list[index].items[index2].editable = true;
                    }
                }
            }
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Saving the edited item
        */
        Controller.prototype.editOnSave = function (id, editable, itemName) {
            var _this = this;
            this.cleanErrorMessage();
            var stat;

            if (itemName == undefined || itemName == '') {
                this.$scope.errorMessage = 'Item name must not be blank.';
            } else {
                this.groceryService.edit(id, itemName).success(function (data, status, headers, config) {
                    if (1 == data.status) {
                        _this.$scope.list = data.groceries;
                    } else {
                        _this.$scope.errorMessage = "Error on edit.";
                    }
                });
            }
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Deletion of a grocery item.
        */
        Controller.prototype.delete = function (id, date) {
            var _this = this;
            this.cleanErrorMessage();

            var stat;

            this.groceryService.delete(id, date).success(function (data, status, headers, config) {
                if (1 == data.status) {
                    _this.$scope.list = data.groceries;
                } else {
                    _this.$scope.errorMessage = 'Error on delete. Status:' + stat;
                }
            });
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Changing the status of a grocery item
        */
        Controller.prototype.changeStatus = function (id, status, editable) {
            var _this = this;
            this.cleanErrorMessage();

            var stat;
            this.groceryService.changeStatus(id, status, editable).success(function (data, status, headers, config) {
                if (1 == data.status) {
                    _this.$scope.list = data.groceries;
                } else {
                    _this.$scope.errorMessage = 'Error on changing grocery status. Status:' + stat;
                }
            });
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Adding a grocery item.
        */
        Controller.prototype.add = function (itemName, date) {
            var _this = this;
            this.cleanErrorMessage();

            var success = true;

            if (itemName == undefined || itemName == '') {
                this.$scope.errorMessage2 = 'Item name must not be blank.';
                success = false;
            }

            var result;

            var convertedDate;

            if (date != undefined && date != '') {
                convertedDate = this.convertDate(date);
                var patt = new RegExp("^(((0[13578]|1[02])/(0[1-9]|[12]\\d|3[01])/((19|[2-9]\\d)\d{2}))|((0[13456789]|1[012])/(0[1-9]|[12]\\d|30)/((19|[2-9]\\d)\\d{2}))|(02/(0[1-9]|1\\d|2[0-8])/((19|[2-9]\\d)\\d{2}))|(02/29/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$");
                result = patt.test(convertedDate);
            }

            var dateNow = this.convertDate(new Date());

            if (date == undefined || date == '' || result == false || convertedDate < dateNow) {
                this.$scope.errorMessage = 'Date must be in MM/dd/yyy format and must be equal or greater than the date today.';
                success = false;
            }

            if (success == true) {
                this.groceryService.add(itemName, convertedDate).success(function (data, status, header, config) {
                    if (data.status == 1) {
                        _this.$scope.list = data.groceries;
                        _this.$scope.grocery = '';
                    } else {
                        _this.$scope.errorMessage = 'Error on add. Status: ' + data.status;
                    }
                });
            }
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Date conversion to MM/dd/yyyy format
        */
        Controller.prototype.convertDate = function (date) {
            var mon = date.getMonth() + 1;
            var day = date.getDate();

            if (mon < 10) {
                mon = '0' + mon;
            }

            if (day < 10) {
                day = '0' + day;
            }

            return [mon, day, date.getFullYear()].join('/');
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Assigns a new date.
        */
        Controller.prototype.today = function () {
            this.$scope.dt = new Date();
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Assigns a minimum date
        */
        Controller.prototype.toggleMin = function () {
            this.$scope.minDate = (this.$scope.minDate) ? null : new Date();
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Opens a date picker
        */
        Controller.prototype.open = function () {
            var _this = this;
            this.$timeout(function () {
                _this.$scope.opened = true;
            });
        };

        /**
        * @author Vincent Racaza
        * @version 001
        * @description Clearing all error messages
        */
        Controller.prototype.cleanErrorMessage = function () {
            this.$scope.errorMessage = '';
            this.$scope.errorMessage2 = '';
        };
        return Controller;
    })();
    Grocery.Controller = Controller;
})(Grocery || (Grocery = {}));
//# sourceMappingURL=GroceryController.js.map
