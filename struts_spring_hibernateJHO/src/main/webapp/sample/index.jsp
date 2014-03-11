<!doctype html>
<html ng-app="base-module">
  <head>
    <script type="text/javascript" src="../scripts/libs/angular/angular.min.js"></script>
    <script type="text/javascript" src="../scripts/main.min.js"></script>

    <script src="/struts_spring_hibernate/js/ui-bootstrap.js"></script>
    <link href="/struts_spring_hibernate/bootstrapcss/bootstrap-combined.min.css" rel="stylesheet">

  </head>
  <body>

    <div ng-controller="GroceryController">
        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage}}</span></div>
        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage2}}</span></div>

        <div>
            <div class="form-horizontal">
                    <input type="text" datepicker-popup="MM/dd/yyyy" ng-model="dt" is-open="opened" min="minDate" max="'12/31/2050'" datepicker-options="dateOptions"  required />
                    <button class="btn" ng-click="open()"><i class="icon-calendar" required></i></button>
             </div>
            <input type="text" ng-model="grocery" required>
            <button ng-click="add(grocery, dt)">Add</button>
        </div>

        <accordion close-others="oneAtATime">
            <accordion-group ng-repeat="data in list" heading="{{data.date}}" is-open="data.isOpen">
                <div ng-repeat="item in data.items">
                     <input type="checkbox" ng-model="item.itemStatus" ng-click="changeStatus(item.id, item.itemStatus,item.editable)">

                    <span ng-switch on="item.editable" >
                        <span ng-switch-when="false">
                             {{item.itemName}}
                             <button class="btn btn-small"  ng-click="editOnClick(item.id, item.editable)">Edit</button>
                        </span>
                        <span ng-switch-when="true">
                           <input type="text" ng-model="item.itemName" required>
                            <button class="btn btn-small"  ng-click="editOnSave(item.id, item.itemStatus, item.itemName)">Save</button>
                        </span>
                     </span>

                       <button class="btn btn-small" ng-click="delete(item.id, data.date)">Delete</button>
                </div>
            </accordion-group>
        </accordion>
    </div>

  </body>
</html>