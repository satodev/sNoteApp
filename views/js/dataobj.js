var dataobj = angular.module('dataobj', []);
dataobj.factory('dataobj', ['$http', ($http)=>{
	var get = ()=>{
		return $http.get('/notes');
	};
	var post = (sendObj)=>{
		return $http.post('/notes', sendObj);
	};
	var update = (sendObj)=>{
		return $http.put('/notes', sendObj);
	};
	var remove = (id)=>{
		return $http.delete('/notes/'+id);
	};
	return {
		get : get,
		post: post,
		update: update,
		remove: remove
	};
}]);
