app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/Login', {
            templateUrl: '/Routes/LoginPage',
            controller: 'LoginController'
        })
        .when('/Register', {
            templateUrl: '/Routes/RegisterPage',
            controller: 'RegisterController'
        })
        .when('/Manage', {
            templateUrl: '/Routes/ManagePage',
            controller: 'ManageController'
        })
        .when('/Browse', {
            templateUrl: '/Routes/BrowsePage',
            controller: 'BrowseController'
        })
        .when('/ImageView/:taxomony', {
            templateUrl: function (params) {
                return '/Routes/ImageViewPage?taxomony=' + params.taxomony;
            },
            controller: 'ImageViewController'
        })
        .when('/Profile', {
            templateUrl: '/Routes/ProfilePage',
            controller: 'ProfileController'
        })
        .otherwise('/Login', {
            templateUrl: '/Routes/LoginPage',
            controller: 'LoginController'
        });

    $locationProvider.hashPrefix('');
}]);