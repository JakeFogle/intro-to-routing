app.controller('DetailsController', function($scope, DataService, $routeParams){

	var peopleIndex = $routeParams.personId;

	$scope.name = DataService.data[peopleIndex].name;
	$scope.description = DataService.data[peopleIndex].description;

});