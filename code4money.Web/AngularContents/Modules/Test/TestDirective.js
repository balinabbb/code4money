app.directive('myTest', function ($http) {
    return {
        restrict: 'E',
        templateUrl: '/AngularContents/Modules/Test/Test.html',
        controller: 'TestController',
        scope: {
            testVar: '='
        }
    };
});