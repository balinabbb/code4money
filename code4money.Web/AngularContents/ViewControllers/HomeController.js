app.controller('HomeController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    
    $scope.homeWrap = (function () {

        var pub = {
            currentRoute: null,
            pageBits: {
                login: true,
                browse: true,
                logout: true,
                manage: true
            },
            store: null
        };

        pub.Init = function () {
            console.log("Home run.");
            $scope.homeWrap.store = $localStorage;

            $scope.loading = true;

            // Init facebook
            if (!$scope.fb.get) {
                $scope.fb.Init(function () {
                    $scope.loading = false;
                });
            } else {
                $scope.loading = false;
            }
        };

        pub.SetRouteProgram = function (url) {
            $scope.homeWrap.currentRoute = GetRouteFromUrl(url);
            ShowHideMenus(GetRouteFromUrl(url));
        };

        pub.LogoutUser = function () {
            if ($localStorage.loginType == "facebook") {

                $scope.fb.CheckLoginState(function (response) {
                    if (response.status == "connected") {
                        $scope.fb.get.logout(function (response) {
                            UnsetUserSession($localStorage);
                            location.href = "#/Login";
                        });
                    } else {
                        UnsetUserSession($localStorage);
                        location.href = "#/Login";
                    }
                });

                
            } else {
                UnsetUserSession($localStorage);
                location.href = "#/Login";
            }
        };

        function ShowHideMenus(routeName) {
            switch (routeName) {
                case "Login":
                    $scope.homeWrap.pageBits.login = false;
                    $scope.homeWrap.pageBits.manage = false;
                    $scope.homeWrap.pageBits.browse = false;
                    $scope.homeWrap.pageBits.logout = false;
                    break;
                case "Register":
                    $scope.homeWrap.pageBits.login = true;
                    $scope.homeWrap.pageBits.manage = false;
                    $scope.homeWrap.pageBits.browse = false;
                    $scope.homeWrap.pageBits.logout = false;
                    break;
                case "Manage":
                    $scope.homeWrap.pageBits.login = false;
                    $scope.homeWrap.pageBits.manage = false;
                    $scope.homeWrap.pageBits.browse = true;
                    $scope.homeWrap.pageBits.logout = true;
                    break;
                case "Browse":
                    $scope.homeWrap.pageBits.login = false;
                    $scope.homeWrap.pageBits.manage = true;
                    $scope.homeWrap.pageBits.browse = false;
                    $scope.homeWrap.pageBits.logout = true;
                    break;
                case "ImageView":
                    $scope.homeWrap.pageBits.login = false;
                    $scope.homeWrap.pageBits.manage = true;
                    $scope.homeWrap.pageBits.browse = true;
                    $scope.homeWrap.pageBits.logout = true;
                    break;
                case "Profile":
                    $scope.homeWrap.pageBits.login = false;
                    $scope.homeWrap.pageBits.manage = true;
                    $scope.homeWrap.pageBits.browse = true;
                    $scope.homeWrap.pageBits.logout = true;
                    break;
                default:
            }
        }
        
        return pub;

    }());

    $scope.fb = (function () {

        var pub = {
            get: null
        };

        pub.Init = function (callback) {

            window.fbAsyncInit = function () {

                FB.init({
                    appId: '155273308418309',
                    cookie: true,
                    xfbml: true,
                    version: 'v2.11'
                });

                FB.AppEvents.logPageView();

                $scope.fb.get = FB;

                callback();
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        };

        pub.CheckLoginState = function (callback) {
            $scope.fb.get.getLoginStatus(function (response) {

                if (response.status == "connected") {

                    FB.api('/me', {
                        locale: 'tr_TR',
                        fields: 'name,email,birthday,hometown,education,gender,website,work'
                    }, function (response) {

                        console.log(response);
                        callback(response);
                    }
                    );

                } else {
                    console.log("Logged Out");
                    callback(response);
                }
            });
        };

        pub.Login = function (callback) {
            $scope.fb.get.login(function (response) {
                if (response.status == "connected") {

                    FB.api('/me', {
                        locale: 'tr_TR',
                        fields: 'name,email,birthday,hometown,education,gender,website,work'
                    }, function (response) {
                        console.log(response);
                        callback(response);
                    });

                } else {
                    console.log("Logged Out");
                    callback(false);
                }
            });
        };

        return pub;

    }());

    function GetRouteFromUrl(url) {
        var urlParts = url.split("/");
        var i = 0;
        while (i < urlParts.length && urlParts[i] !== "#")
            i++;
        if (i < urlParts.length && (i + 1) < urlParts.length) {
            return urlParts[i + 1];
        }
        return null;
    }

    // Url changed event
    $scope.$on('$locationChangeStart', function (event, to, from) {
        if (!event || !to || !from)
            return;

        $scope.homeWrap.SetRouteProgram(to);
    });

    $scope.$watch('$localStorage', function (a, b, c) {
        //console.log($localStorage);
    });

}]);