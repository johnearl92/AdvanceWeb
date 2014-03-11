/**
* Created by OneTeraByteDesu on 2/25/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
///<reference path='../model/PlaneSeatModel.ts' />
///<reference path='../service/PlaneSeatService.ts' />
///<reference path='../service.ts' />
///<reference path='../model.ts' />
var PlaneSeat;
(function (PlaneSeat) {
    var Controller = (function () {
        function Controller($scope, planeService) {
            var _this = this;
            this.$scope = $scope;
            this.planeService = planeService;
            $scope.getPlanes = function () {
                return _this.getPlanes();
            };
            this.getPlanes();

            $scope.menuChoice = function (planefier) {
                return _this.menuChoice(planefier);
            };
        }
        Controller.prototype.getPlanes = function () {
            var _this = this;
            this.planeService.getP().success(function (data, status, header, config) {
                if (data.status == 1) {
                    _this.$scope.plist = data.planes;
                }
            });
        };

        Controller.prototype.menuChoice = function (planefier) {
            //                for(var i:number = 1;i!=planefier.planeCapacity;i++){
            //                    this.$scope.arrayChoice.push(i);
            //                    console.log(planefier)
            //                }
            console;
        };
        return Controller;
    })();
    PlaneSeat.Controller = Controller;
})(PlaneSeat || (PlaneSeat = {}));
//# sourceMappingURL=PlaneSeatController.js.map
