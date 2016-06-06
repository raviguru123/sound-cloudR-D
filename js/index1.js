var app=angular.module('test.module', ["ngMaterial"]);

app.controller('autocompleteController', ['$scope','$q', function($scope,$q){
	
   //build list of states as map of key-value pairs

    $scope.querySearch=function(query) {
debugger;
    	if(query==null||query=="")
    	{
    		return $scope.loadStates();
    	}
   	var results = query ? $scope.loadStates().filter(function(state){
   		var lowercaseQuery = angular.lowercase(query);
   		return (state.value.indexOf(lowercaseQuery) === 0);
   	}) : $scope.loadStates, deferred;
   	console.log(results);
   	return results;
   }


    $scope.loadStates=function(){
   	var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
   	Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
   	Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
   	Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
   	North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
   	South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
   	Wisconsin, Wyoming';
   	return allStates.split(/, +/g).map( function (state) {
   		return {
   			value: state.toLowerCase(),
   			display: state
   		};
   	});
   }

}]);

