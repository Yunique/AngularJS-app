angular.module('RoutingApp',['ngRoute', 'calc']).config(function($routeProvider){
    $routeProvider
	.when('/',{
		templateUrl : 'pages/homepage.html',
	})
	.when('/age',{
		templateUrl : 'pages/age.html',
	})
	.when('/calculating',{
		templateUrl : 'pages/calculating.html',
	});
});