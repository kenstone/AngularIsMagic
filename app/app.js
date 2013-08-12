var ponies = angular.module('AngularIsMagic',[]);

ponies.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'app/views/home.html'}).
				   when('/end', {templateUrl: 'app/views/end.html'}).
				   when('/page/0/', {templateUrl: 'app/views/home.html'}).
				   when('/page/1', {templateUrl: 'app/views/title.html'}).
				   when('/page/2', {templateUrl: 'app/views/spa.html'}).
				   when('/page/3', {templateUrl: 'app/views/mvc.html'}).
				   when('/page/4', {templateUrl: 'app/views/scope.html'}).
				   when('/page/5', {templateUrl: 'app/views/basicInput.html'}).
				   when('/page/6', {templateUrl: 'app/views/basicNames.html'}).
				   when('/page/7', {templateUrl: 'app/views/basicSquare.html'}).
				   when('/page/8', {templateUrl: 'app/views/fancySquare.html'}).
				   when('/page/9', {templateUrl: 'app/views/list.html'}).
				   when('/page/10', {templateUrl: 'app/views/list-filter.html'}).
				   when('/page/11', {templateUrl: 'app/views/end.html'})
}]);

ponies.controller('PonyController', ['$scope', '$location', function($scope, $location) {

	var currentPageNumber = 0;
	$scope.vm = {};
	$scope.Math = window.Math;

	$scope.changePage = function(e) {
		switch (e.keyIdentifier) {
			case "Right":
				currentPageNumber++;
				break;
			case "Left":
				if (currentPageNumber > 0) {
					currentPageNumber--;
				}
				break;
		}

		$location.path("/page/" + currentPageNumber)
	};

	$scope.$watch('vm.numberToSquare', function() {
		$scope.vm.squaredNumber = Math.pow($scope.vm.numberToSquare || 0, 2);
	});

}]);