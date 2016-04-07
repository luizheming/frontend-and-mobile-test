'use strict';

angular.module('appClient').controller('masterCtrl', ['$scope', 'MasterService', function ($scope, MasterService) {
	MasterService.GetList().then(function (response) { $scope.list = response.data; });
}]);
