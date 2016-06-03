var dataobj = angular.module('dataobj', []);
dataobj.factory('dataobj', ['$http', ($http)=>{
	var get = ()=>{
		$http.get('/notes').then((data)=>{
			console.log(data);	
		},(response)=>{
			console.log('Error, while $http.get');
		});
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

		});
	};
	var remove = (id)=>{
		$http.delete('/notes', id).then((data)=>{
			
		},(response)=>{

		});
	};
	return {
		get : get,
		post: post,
		update: update,
		remove: remove
	};
}]);
