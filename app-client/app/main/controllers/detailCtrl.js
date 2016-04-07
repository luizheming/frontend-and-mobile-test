'use strict';

angular.module('appClient').controller('detailCtrl', ['$scope', '$stateParams', 'MasterService', function ($scope, $stateParams, MasterService) {
	var id = $stateParams.id;
	MasterService.GetPerson(id).then(function (response) {
		$scope.person = response.data;
	});
}]);
