var app = angular.module("app",[]);

app.controller("table_controller", function($scope)
	$scope.sorted_columns = []; 
	$scope.all_fields = [{
		"title": "name", 
		"type": "string"
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

	}		


	}];

	$scope.data = [{
		"name": "Bill Gates",
		"age": "58",
		"occupation": "Richer than you"
	},
	{	"name": "Barack Obama", 




	}];

	$scope.$watch("all_fields")	
