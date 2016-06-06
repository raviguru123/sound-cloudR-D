/*var app=angular.module('test.module', ["ngRoute"]);
var app=angular.module('test.module', []);




app.controller('MainCtrl', function ($scope,$location) {
    $scope.login=function() {
        debugger;
        var url="https://api.instagram.com/oauth/authorize/?client_id=fbc08677f1bb4075b4d4517c04a225b4&redirect_uri=localhost:8887&response_type=token";
       $location.url(url);
    };
});*/

$(document).ready(function(){
	SC.initialize({
		client_id: '08ffe545ab9e0496a116d314ff0d9094',
		redirect_uri: 'http://localhost:8887/callback.html'
	});
	$(".btnlogin").click(function(){
		SC.connect().then(function() {
			console.log("sound cloud url=",window.location.href);
			console.log("parent window url",parent.window.location.href);
			return SC.get('/me');
		}).then(function(me) {
			debugger;
			alert('Hello, ' + me.username);
		});
	})
});
// update user's profile description\

var myApp = angular.module('myApp', []);
myApp.directive('fileModel', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}]);
myApp.service('fileUpload', ['$http', function ($http) {
	this.uploadFileToUrl = function(file, uploadUrl){
		var fd = new FormData();
		fd.append('file', file);
		$http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		})
		.success(function(){
		})
		.error(function(){
		});
	}
}]);
myApp.factory("uploadfile",function($http,$q){

	var obj={};
	obj.uploadAudio=function(file,title){
		debugger;
		SC.upload({
                  file:file, // a Blob of your WAV, MP3...
                  title: title
              }).then(function(success){
              	console.log("success",success);
              },function(reason){
              	console.log("reason=",reason);
              });
          }
          return obj;
      })
myApp.controller('myCtrl', ['$scope','fileUpload','downloadFactory','uploadfile', function($scope, fileUpload,downloadFactory,uploadfile){

	$scope.uploadFile = function(){
		var file = $scope.myFile;
		console.log('file is ',file);

                //var uploadUrl = "/fileUpload";
                uploadfile.uploadAudio(file,file.name);
                //fileUpload.uploadFileToUrl(file, uploadUrl);
            };

            $scope.download=function(){
            	downloadFactory.download().then(function(response){
            		console.log("response in controller=",response);
            		debugger;
            		$scope.audioFile=response.data;
            		// uploadfile.uploadAudio(response.data,"test");

            	},function(reason){
            		console.log("reaso in controller=",reason);
            	});
            }

        }]);


myApp.factory("downloadFactory",function($http,$q){
	var obj={};
	var defer=$q.defer();
	obj.download=function(){
		debugger;
		$http.get("http://download1076.mediafire.com/na2mfkh5xycg/9dx61kecs6q5djk/B2_high_achieving_teenagers.mp3").then(function(response){
			defer.resolve(response);
		},function(reason){
			alert("error occured=",reason);
			defer.reject("error occured=",reason);
		});
		return defer.promise;
	}
	return obj;
})



$(document).ready(function(){
	$("body").on("click",'.btninsta', function(e) {
     // alert("twitter Click ");
     debugger;
     var width = 575,
     height = 400,
     left = ($(window).width() - width) / 2,
     top = ($(window).height() - height) / 2,
     url = this.href,
     opts = 'status=1' +
     ',width=' + width +
     ',height=' + height +
     ',top=' + top +
     ',left=' + left;
     win=window.open("https://instagram.com/oauth/authorize/?client_id=	f762d3e06bf947aca874d08417259d1c&redirect_uri=http://localhost:8887&response_type=token", 'instagram.com', opts);

     var interval = window.setInterval(function() {
     	
     	//console.log("window url=",win.location.href)
     	var url=win.location.href;
     	var index=url.indexOf("=");
     	var accesstoken=url.substring(index,url.length);
     	console.log("access token=",accesstoken);
     	//console.log("index=",index);
     	win.close();
          	   //var url=win.location.href;
          	   //console.log("url=",url);
          	   //console.log("html=",win.innerHtml());
          	   try {
          	   	if (win == null || win.closed) {
          	   		window.clearInterval(interval);
                   //call Bcak Function After Twitter Window Closed

               }
           }
           catch (e) {
           }
       }, 1000);
     return false;
 });
})






$(document).ready(function(){

	var track_url = 'https://api.soundcloud.com/tracks/267224271';
	SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
		console.log('oEmbed response: ', oEmbed);
	});
	//https://api.soundcloud.com/tracks/267224271
	/*SC.stream('/tracks/267224271').then(function(player){
		player.play();
	});*/
	$(document).bind('soundcloud:onPlayerReady', function(event, data) {
		var mediaUri = data.mediaUri,
		mediaId   = data.mediaId,
		flashNode = event.target;
	});	

	soundcloud.addEventListener('onPlayerReady', function(player, data) {
		player.api_play();
		var flashvars = {
			enable_api: true,
			object_id: "myPlayer",
			url: "https://api.soundcloud.com/tracks/267224271"
		};
		var params = {
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "myPlayer",
			name: "myPlayer"
		};
		swfobject.embedSWF("http://player.soundcloud.com/player.swf", "myContent", "81", "100%", "9.0.0","expressInstall.swf", flashvars, params, attributes);
	});
	soundcloud.addEventListener('onMediaStart', function(player, data) {
		console.log('track started id:' + data.mediaId);
	});

	soundcloud.addEventListener('onMediaPlay', function(player, data) {
		console.log('track is playing id:' + data.mediaId);
	});
})
