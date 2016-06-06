myApp = angular.module('plunker', ['ui.tinymce','ui.bootstrap']);
var TabsDemoCtrl = function ($scope) {
    $scope.modal = {
      one :'some',
      two: 'again'
    }
    $scope.check=function(){
    	console.log("tiny mc output",$scope.modal.one,$scope.modal.two);
    }
    
};
