/**
 * Created by OneTeraByteDesu on 2/25/14.
 */

 ///<reference path='../../libs/angularjs/angular.d.ts' />
module PlaneModel{
    export class Plane{
        planeID:any;
        planeName:string;
        planeCapacity:any;
        planeRows:any

        constructor(data:any){
           this.planeID=data.planeID;
            this.planeName=data.planeName;
            this.planeCapacity=data.planeCapacity;
            this.planeRows=data.planeRow;
        }

    }

    export class PlaneList{
        planes:PlaneModel.Plane[];
        status: number;


        constructor(data:any){
            this.planes = data.planes;
            this.status = data.status;

        }
    }

}