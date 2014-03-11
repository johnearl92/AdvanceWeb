/**
* Created by OneTeraByteDesu on 2/25/14.
*/
///<reference path='../../libs/angularjs/angular.d.ts' />
var PlaneModel;
(function (PlaneModel) {
    var Plane = (function () {
        function Plane(data) {
            this.planeID = data.planeID;
            this.planeName = data.planeName;
            this.planeCapacity = data.planeCapacity;
        }
        return Plane;
    })();
    PlaneModel.Plane = Plane;

    var PlaneList = (function () {
        function PlaneList(data) {
            this.planes = data.planes;
            this.status = data.status;
        }
        return PlaneList;
    })();
    PlaneModel.PlaneList = PlaneList;
})(PlaneModel || (PlaneModel = {}));
//# sourceMappingURL=PlaneSeatModel.js.map
