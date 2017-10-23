var isAppLoaded = false;

app.config(["$stateProvider", "$urlRouterProvider", '$mdDateLocaleProvider',
    function ($stateProvider, $urlRouterProvider, $mdDateLocaleProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('root', {
            abstract: true,
            template: '<div ui-view=""></div>'/*,
            resolve: {
                localizationStrings: ['GlobalService',
                    function (GlobalService) {
                        if (isAppLoaded === false) {
                            isAppLoaded = true;
                            return null;
                        }
                    }
                ]
            }*/
        });

        $stateProvider
            .state("home", {
                url: '/home',
                templateProvider: ["$templateFactory", function ($templateFactory) {
                    return $templateFactory.fromUrl('/AngularContents/Modules/Home/home.html');
                }],
                controller: 'HomeController',
                parent: 'root'
            }).state("test", {
                url: '/test',
                templateProvider: ["$templateFactory", function ($templateFactory) {
                    return $templateFactory.fromUrl('/AngularContents/Modules/Test/test.html');
                }],
                controller: 'TestController',
                parent: 'root'
            });
    }
]);