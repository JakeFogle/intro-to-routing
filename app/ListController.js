app.controller('ListController', function($scope, DataService, $location) {
	
	$scope.people = DataService.data;

	$scope.updateRoute = function(index) {
		$location.path('/people/' + index);
	}

});