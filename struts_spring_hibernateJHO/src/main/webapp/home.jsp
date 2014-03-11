<!DOCTYPE html>
<html ng-app = 'base-module'>

	<head>
		<title>Group 7 - Airline Seat Reservation</title>
		<link rel="shortcut icon" type="image" href="/struts_spring_hibernate/bootstrapcss/images/favicon.ico">
		<link rel="stylesheet" type="text/css" href="/struts_spring_hibernate/bootstrapcss/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="/struts_spring_hibernate/bootstrapcss/custom.css">
		<link rel="stylesheet" type="text/css" href="/struts_spring_hibernate/bootstrapcss/ng-grid.css" />
		<script type="text/javascript" src = "<%=request.getContextPath() + "/" %>js/jq_v2.0.2.js"></script>
		<script type="text/javascript" src ="<%=request.getContextPath() + "/" %>js/angular.min.js"></script>
		<script type="text/javascript" src ="<%=request.getContextPath() + "/" %>js/ui-bootstrap.js"></script>
        <script type="text/javascript" src ="<%=request.getContextPath() + "/" %>js/ng-grid.js"></script>
		<script type="text/javascript" src = "/struts_spring_hibernate/scripts/main.min.js"></script>
	</head>

	<body ng-controller = 'PassengerController'>
		<div class = 'overlay'></div>
		<div class = 'head'></div>
		<div class = 'hero col-lg-12 glass'>	
		<tabset justified = 'false'>
			<tab heading = 'Passenger Management'>
			<div class = 'col-lg-4'>
				<br>
				<h4>Passenger Information</h4>
					<div class = 'col-lg-11'>

                        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage}}</span></div>
                        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage1}}</span></div>
						<input ng-model= 'firstname' placeholder = 'First name' class = 'form-control' type = 'text'>
						<label> </label>
                        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage2}}</span></div>
						<input ng-model= 'middlename' placeholder = 'Middle name' class = 'form-control' type = 'text'>
						<label> </label>
                        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage3}}</span></div>
						<input ng-model= 'lastname' placeholder = 'Last name' class = 'form-control' type = 'text'>
						<label> </label>
                        <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage4}}</span></div>
						<input ng-model= 'email' placeholder = 'E-mail address' class = 'form-control' type = 'text'>
						<label> </label>
                        <div class ='col-lg-12'>
                            <div class="col-lg-7" >
                            <!--<input ng-model= 'birthdate' placeholder = 'Birthdate' class = 'form-control' datepicker-popup="MM/dd/yyyy"  is-open = 'opened'>-->
                                <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage5}}</span></div>
                                <input type="date" ng-model="birthdate" placeholder = 'Birthdate' type = 'text' class = 'form-control' required/>
                            </div><br/><br/>
                            <div class = 'btn-group col-lg-8'>
                                <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage6}}</span></div>
                                <button class = 'btn btn-primary' ng-model="gender" value="Male" btn-radio="'Male'">Male</button>
                                <button class = 'btn btn-primary' ng-model="gender" value="Female" btn-radio="'Female'">Female</button>
                            </div>
                        </div>
					</div>

					<!-- ====================================================================== -->
					<!-- 						 DatePicker and Gender 							-->
					<!-- ====================================================================== -->			
					<div class = 'pInfoG col-lg-11'>

						<div class = 'input-group'>

							<span class = 'input-group-addon'><span>#</span></span>
							<input ng-model= 'contactno' placeholder = 'Contact number' class = 'form-control'>
                            <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage7}}</span></div>
						</div>
							<label> </label>
                            <div><span class="help-inline"  style="color:red; display:block;">{{errorMessage8}}</span></div>
							<input ng-model= 'address' placeholder = 'Address' type = 'text' class = 'form-control'>
							<br>
							<div ng-controller='PlaneSeatController'>
                            <!-- Airplane -->
                            <br/>
                            <h4>Choose an airplane</h4>
                            <select class="form-control" ng-model="planeChoice" ng-options="p.planeName for p in plist" ng-change="menuChoice(planeChoice)">
                                <option value="">-- choose a plane --</option>
                            </select>
                            <select class="form-control" ng-model="choice">
                                <option value="">-- select a seat --</option>
                                <option ng-repeat="c in arrayChoice">{{c}}</option>
                            </select>
                            <br/>
							<button ng-click="addPassenger(firstname, lastname, middlename, birthdate, contactno, address, gender, email);saveSeat(planeChoice,choice,firstname, middlename, lastname)" class = 'btn btn-primary btn-block'>Add Passenger</button>
							
                        	</div>
					</div>
				
			</div>
				<!-- End of input forms for passenger information -->


				<!-- Userlist table starts `re -->
	
				<div class = 'mtable col-lg-8 pInfoG'>
						<div>

							<div class = 'gridStyle'>
                                <table  class="table table-striped table table-bordered table" >
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>E-mail</th>
                                            <th>Contact No.</th>
                                            <th>Gender</th>
                                            <th>Birthdate</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody ng-repeat="currentdata in list.passengers | filter:passenger">
                                        <tr>
                                            <td>{{currentdata.firstname + " " +currentdata.middlename+" "+currentdata.lastname}}</td>
                                            <td>{{currentdata.address}}</td>
                                            <td>{{currentdata.email}}</td>
                                            <td>{{currentdata.contactNo}}</td>
                                            <td>{{currentdata.gender}}</td>
                                            <td>{{currentdata.birthdate}}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm">
                                                <span class="glyphicon glyphicon-edit"></span></button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                <span class="glyphicon glyphicon-remove-sign"></span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

						</div>
				</div>
			</tab>
			<tab heading = 'Seat Reservation' >
              <!--AFTER ADD PASSENGER-->
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div ng-controller='PlaneSeatController'>
                            <!-- Airplane -->
                            <br/>
                            <h4>Choose an airplane</h4>
                            <select class="form-control" ng-model="planeChoice" ng-options="p.planeName for p in plist" ng-change="menuChoice(planeChoice)">
                                <option value="">-- choose a plane --</option>
                            </select>
                            <!-- Seat -->
                            <br>
                            <h4>Choose a seat</h4>
                            <select class="form-control">
                                <option value="">-- select a seat --</option>
                                <option ng-repeat="c in arrayChoice">{{c}}</option>
                            </select>
                            <br/>
                            <button type="button" class="btn btn-primary btn-block">
                            Save information</button>
                        </div>
                    </div>
                </div><br/>

              <!--NORMAL SCREEN NGA MUAPPEAR IF IYA ICLICK ANG TAB NGA SEAT RESERVATION-->
                <div ng-controller='PlaneSeatController'>
                <!-- IF GANAHAN SYA MAKITA ANG LIST OF PASSENGERS IN A PLANE WITH SEAT NUMBER -->
                    <br/>
                    <div class="col-md-4">
                        <h4>Choose an airplane</h4>
                        <select class="form-control" ng-model="planeChoice" ng-options="p.planeName for p in plist" ng-change="menuChoice(planeChoice)">
                        <option value="">-- choose a plane --</option>
                        </select><br/>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8">
                    <div class = 'gridStyle'>
                        <table  class="table table-striped table table-bordered table" >
                            <thead>
                                <tr>
                                <th>Passenger's name</th>
                                <th>Airplane</th>
                                <th>Seat no.</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody ng-repeat="currentdata in list.passengers | filter:passenger">
                                <tr>
                                    <td>{{currentdata.firstname + " " +currentdata.middlename+" "+currentdata.lastname}}</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-sm">
                                        Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
		    </tab>
					

		</tabset>

		</div>
	</body>
</html>