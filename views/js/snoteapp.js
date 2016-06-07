let app = angular.module('snoteapp', ['dataobj']);
app.controller('sna_ctrl', ['dataobj', '$scope',(dataobj, $scope)=>{
	$scope.obj = [];
	$scope.pushObj = (arg)=>{
		$scope.obj.push(arg);
	};
	$scope.searchObj= (id)=>{
		for(var i in $scope.obj){
			if($scope.obj[i]._id == id){
				return i;	
			}
		}
	};
	$scope.get = ()=>{
		dataobj.get().then((data)=>{
			$scope.obj = data.data;		
		}, (error)=>{
			console.log(error);
		});
	};
	$scope.post = (title, text)=>{
		if(title, text){
			var sendObj = {
				title: title, 
				text: text
			};
			dataobj.post(sendObj).then((data)=>{
				$scope.pushObj(data.data);
			}, (res)=>{
				console.log('post problem');	
			});
		}
	};
	$scope.update = (id, title, text)=>{
		if(id, title, text){
			var sendObj = {
				id : id, 
				title: title,
				text : text
			};
			dataobj.update(sendObj).then((data)=>{
				var index = $scope.searchObj(sendObj.id);
				$scope.obj[index].title = sendObj.title;
				$scope.obj[index].text = sendObj.text;	
			}, (res)=>{
				console.log('probleme while updating ' + res);
			});
		}
	};
	$scope.remove = (id)=>{
		if(confirm('Do you reall want to delete me ?')){
		dataobj.remove(id).then((data)=>{
			var index = $scope.searchObj(id);
			$scope.obj.splice(index, 1);
		}, (error)=>{
			console.log('update error : ' + error);
		});
		}
	};
}]);
