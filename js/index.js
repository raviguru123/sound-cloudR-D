console.log("desktop branch changes");
console.log("Next desktop changes");
var app=angular.module("directive.module",['ngMaterial']);
app.controller("DirectiveController",DirectiveController);
function DirectiveController($scope,$mdToast){
	$scope.showSimpleToast = function() {
		debugger;
		$scope.pos={
			bottom: false,
			top: true,
			left: false,
			right: true
		}
		$mdToast.show(
			$mdToast.simple()
			.textContent('Hello World!')
			.position("left bottom")                      
			.hideDelay(3000)
			);
	};
	$scope.myDate = new Date();
	$scope.minDate = new Date(
	$scope.myDate.getFullYear()-10,
	$scope.myDate.getMonth()-2,
	$scope.myDate.getDate());
	$scope.pageName="index.html";
	$scope.outervalue="outervalueSuccess";
	$scope.li1="li1";
	$scope.li2="li2";
	$scope.li3="li3";
	$scope.date="";
	$scope.check=function(obj){
		debugger;
		obj=JSON.parse(obj);
		console.log("before iterating=",obj,obj.length,length);
		console.log("changes in second branch");
		console.log("change in first branch");
		console.log("hit chnages from home directory");
		for(var i=0;i<obj.length;i++)
		{
			console.log(obj[i].name);
		}
	}
	$scope.obj=[{name:"ravi"},{name:"someone"}]
}
console.log("Changes from Desktop Driectory");
app.directive('cardLen', function () {
	return {
		restrict: 'E',
		scope: true,
		templateUrl:'./directory/dir1.html',
		link: function (scope,elements,attr,controller,transclude) {
			console.log("attr obj=",attr.data);
			scope.outervalue="outer value change from directory";
			scope.dirval={name:"directory value"};
			scope.dataValue=attr.data;
			scope.check1=function(dataValue,event){
				alert("directory function called");
				scope.check(dataValue);
			}

		}
	}
});

console.log("Home branch change");
console.log("next home changes");