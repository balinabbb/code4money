var isAppLoaded = false;

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", 
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //$urlRouterProvider.otherwise("/Home");
        //$locationProvider.html5Mode(false);
        //$locationProvider.hashPrefix('!');

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
        }).state("home", {
            url: '/Home',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Modules/Home/home.html');
            }],
            controller: 'HomeController',
            parent: 'root'
        }).state("login", {
            url: '/Login',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Views/Login/Login.html');
            }],
            controller: 'LoginController',
            parent: 'root'
        }).state("register", {
            url: '/Register',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Views/Register/Register.html');
            }],
            controller: 'RegisterController',
            parent: 'root'
        }).state("manage", {
            url: '/Manage',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Views/Manage/Manage.html');
            }],
            controller: 'ManageController',
            parent: 'root'
        }).state("browse", {
            url: '/Browse',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Views/Browse/Browse.html');
            }],
            controller: 'BrowseController',
            parent: 'root'
        }).state("imageview", {
            url: '/ImageView/:imageId',
            templateProvider: ["$templateFactory", function ($templateFactory) {
                return $templateFactory.fromUrl('/AngularContents/Views/ImageView/ImageView.html');
            }],
            controller: 'ImageViewController',
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