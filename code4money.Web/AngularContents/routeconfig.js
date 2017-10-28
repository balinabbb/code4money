app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/Login', {
            templateUrl: '/Routes/Login',
            controller: 'LoginController'
        })
        .when('/Register', {
            templateUrl: '/Routes/Register',
            controller: 'RegisterController'
        })
        .when('/Manage', {
            templateUrl: '/Routes/Manage',
            controller: 'ManageController'
        })
        .when('/Browse', {
            templateUrl: '/Routes/Browse',
            controller: 'BrowseController'
        })
        .when('/ImageView/:taxomony', {
            templateUrl: function (params) {
                return '/Routes/ImageView?taxomony=' + params.taxomony;
            },
            controller: 'ImageViewController'
        });

    $locationProvider.hashPrefix('');
}]);