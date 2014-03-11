/**
 * Created by OneTeraByteDesu on 2/25/14.
 */

///<reference path='../../libs/angularjs/angular.d.ts' />

///<reference path='../model/PlaneSeatModel.ts' />
///<reference path='../service/PlaneSeatService.ts' />
///<reference path='../service.ts' />
///<reference path='../model.ts' />
module PlaneSeat{
    export interface Scope extends ng.IScope{
        planeID:number;
        planeName:string;
        planeCapacity:number;
        plist:PlaneModel.Plane[];
        arrayChoice:any;
        divDisplay:any;


        getPlanes:()=>void;
        menuChoice:(planefier:PlaneModel.Plane)=>void;
        saveSeat:(planeChoice:PlaneModel.Plane,seatNo:string,fname:string,mname:string,lname:string)=>void;
    }

    export class Controller{

        constructor(public $scope:Scope, public planeService:Service.PlaneService){


            $scope.getPlanes = () => this.getPlanes();
            this.getPlanes();

            $scope.menuChoice = (planefier:PlaneModel.Plane) => this.menuChoice(planefier);
            $scope.saveSeat = (planeChoice:PlaneModel.Plane,seatNo:string,fname:string,mname:string,lname:string) =>  this.saveSeat(planeChoice,seatNo,fname,mname,lname);
        }

        saveSeat(planeChoice:PlaneModel.Plane,seatNo:string,fname:string,mname:string,lname:string):void{

            var name:string = fname+" "+mname+" "+lname;
            console.log("saving seat planeID="+planeChoice.planeID+" seatNo= "+seatNo+" name= "+name);
            this.planeService.saveReservation(planeChoice.planeID,seatNo,name).success((data, status, header, config) => {

                console.log("Success reserve");
            });
        }


        getPlanes():void{
            this.planeService.getP()
                .success((data:PlaneModel.PlaneList, status, header, config) => {

                    if(data.status==1){
                        this.$scope.plist = data.planes;
                    }
                });

        }

        menuChoice(planefier:PlaneModel.Plane):void{

            var choices = new Array();
            var letters = 'A';
            console.log("vb");

            for(var i:number = 0;i<(planefier.planeCapacity/planefier.planeRows);i++){
                for(var k:number = 1;k<=planefier.planeRows;k++){
                    choices.push(k+letters);

                }
                letters =  String.fromCharCode(letters.charCodeAt(0) + 1);

            }


            console.log(choices);
            this.$scope.arrayChoice = choices;




        }




    }

}