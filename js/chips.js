  var app=angular.module('contactChipsDemo', ['ngMaterial','ngMaterialDatePicker']);
  app.controller('myCtrl', ['$scope','autoComplete', function($scope,autoComplete){
    $scope.myItems=["ravi","kumar","rana"];
    $scope.content=[]; 
    $scope.search=function(query){
      return autoComplete.querySearch(query);
    }
    $scope.sendValue=function(){
      console.log("Content array=",$scope.content);
    }

    $scope.hello=function(param){
      alert("hello",param);
    }
  }]);
  app.factory("autoComplete",function($q){
    var obj={};
    obj.loadStates=function(){
      var allStates = 'Alabamaaaaaaaaaaa, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
      Florida, Georgia, aawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
      Maine, Maryland, aassachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
      Nebraska, Nevada, aew Hampshire, New Jersey, New Mexico, New York, North Carolina,\
      North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
      South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
      Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state,
          image:"http://lorempixel.com/50/50/people?2",
          name:state.toUpperCase(),
          email:"raviguruiitr@gmail.com"
        };
      });
    };
    obj.querySearch=function(query) {
      debugger;
      if(query==null||query=="")
      {
        return obj.loadStates();
      }
      var results = query ? obj.loadStates().filter(function(state){
        var lowercaseQuery = angular.lowercase(query);
        return (state.value.indexOf(lowercaseQuery) === 0);
      }) :  obj.loadStates();
      return results;
    };

    return obj;
  });
