var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'example', 'users', 'todos']);

app.config(['$locationProvider', function($locationProvider) {
		//$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false,
			rewriteLinks: false
		});
	}
]);

if (window.location.hash === '#_=_') window.location.hash = '';

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});

//var app = angular.module('mean', ['example', 'ngRoute']);