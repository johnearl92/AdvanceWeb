angular.module('airline',['ui.bootstrap','ngGrid']);
var TabsCtrl = function ($scope) {
    // $scope.tabs = [
    //     { title:"Dynamic Title 1", content:"Dynamic content 1" },
    //     { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }

    // ];

};

var ButtonCtrl = function ($scope) {
 	$scope.radioModel = '';
};



var TableCtrl = function ($scope) {
	$scope.Selection = [];
	$scope.Data = [
		{Contact:'09321568384',FN:'Joseph Dan',LN: 'Alinsug',MN: 'Blanco',Age:18,Birthdate:"YYYY-MM-DD",Gender:"Male",Address:"Address,@sdasd"},
		{Contact:'09321568385',FN:'Joseph Dan',LN: 'Alinsug',MN: 'Blanco',Age:18,Birthdate:"YYYY-MM-DD",Gender:"Male",Address:"Address,@sdasd"}
	];	
	$scope.gridOptions = {
		data:'Data',
		selectedItems: $scope.Selection,
		enableCellSelection:true,
		enableRowSelection:true,
		enableCellEdit:true,
		multiSelect:false
	};
};

var DatepickerCtrl = function ($scope) {
	$scope.Birthdate = '';	
	$scope.dateOptions = ''

}