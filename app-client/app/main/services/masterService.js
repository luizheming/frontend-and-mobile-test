'use strict';

angular.module('appClient').factory('MasterService', ['$http', function ($http) {
	var urlServer = 'http://localhost:8090';

	return {
		GetList: function () {
			return $http.get(urlServer);
		},
		GetPerson: function (id) {
			return $http.get(urlServer + '/' + id );
		}
	}
}]);
