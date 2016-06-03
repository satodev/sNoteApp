let app = angular.module('snoteapp', ['dataobj']);
app.controller('sna_ctrl', ['dataobj',(dataobj)=>{
	document.onreadystatechange = ()=>{
		dataobj.get();
	};
	dataobj.post('Hello', 'my name is sato');
	dataobj.update();
	dataobj.remove();
}]);
