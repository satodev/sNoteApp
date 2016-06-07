let app = angular.module('snoteapp', ['dataobj']);
app.controller('sna_ctrl', ['dataobj', '$scope',(dataobj, $scope)=>{
	$scope.obj = [];
	$scope.get = ()=>{
		dataobj.get().then((data)=>{
			$scope.obj = data;		
		}, (error)=>{
			console.log(error);
		});
	};
	$scope.post = (title, text)=>{
		dataobj.post(title, text);
	};
	$scope.update = (id, title, text)=>{
		dataobj.update(id, title, text);
	};
	$scope.remove = (id)=>{
		dataobj.remove(id).then((data)=>{
			console.log(data);
		}, (error)=>{
			console.log('update error : ' + error);
		});
	};
}]);
