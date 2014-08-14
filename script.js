var app = angular.module("app",[]);

app.controller("table_controller", function($scope) {
	$scope.sorted_columns = []; 
	$scope.all_fields = [{
		"title": "name", 
		"type": "string",
		"checked": true 
	},
	{
		"title": "age",
		"type": "number", 
		"checked": true

	},
	{
		"title": "occupation", 
		"type": "string",
		"checked": true 

	}];		

	$scope.data = [{
		"name": "Bill Gates",
		"age": 58,
		"occupation": "Richer than you"
	},
	{	"name": "Barack Obama", 
		"age": 53, 
		"occupation": "HNIC"
	},	

	{	"name": "Bill Clinton",
		"age": "100",
		"occupation": "Master seducer"

	}];

	$scope.$watch("all_fields", function(){
		update_fields();
	}, true); //I don't know if I'm supposed to leave comments anyway here's one: 
	// Hope you're having an amazing day/night


	var update_fields = function(){
		$scope.sorted_columns = [];
		for(var i = 0; i < $scope.all_fields.length; i++){
			var mainColumn = $scope.all_fields[i];
			if(mainColumn.checked) {
				$scope.sorted_columns.push(mainColumn);
			}
		}
	}
});

	