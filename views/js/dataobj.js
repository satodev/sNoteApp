var dataobj = angular.module('dataobj', []);
dataobj.factory('dataobj', ['$http', ($http)=>{
	var get = ()=>{
		return $http.get('/notes');
	};
	var post = (title, text)=>{
		var sendObj = {
			title: title,
			text: text
		};
		$http.post('/notes', sendObj).then((data)=>{
			console.log(data);
		},(response)=>{
			console.log('Error, while $http.post');
		});
	};
	var update = (id, title, text)=>{
		var sendObj = {
			id :id,
			title:title,
			text:text
		};
		$http.put('/notes', sendObj).then((data)=>{
			console.log(data);
		}, (response)=>{
			console.log('update went wrong : '+ response);
		});
	};
	var remove = (id)=>{
		var sendObj = {
			id: id
		};
		console.log(sendObj);
		return $http.delete('/notes',sendObj);
	};
	return {
		get : get,
		post: post,
		update: update,
		remove: remove
	};
}]);
