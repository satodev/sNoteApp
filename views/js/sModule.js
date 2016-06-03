var smod= angular.module('sModule', []);
smod.factory('sfac', ()=>{
	var log = ()=>{
		console.log('Hello i am the one from the other side, you know ...');
	};
	return {
		log: log
	};
});
