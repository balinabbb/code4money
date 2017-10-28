app.directive('testElement', function () {
    return {
        templateUrl: 'AngularContents/Modules/Test/Test.html',
        controller: 'TestController',
        scope: {
            testVar: "="
        }
    };
});