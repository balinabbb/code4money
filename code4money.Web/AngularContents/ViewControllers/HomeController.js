app.controller('HomeController', ['$scope', '$localStorage', function ($scope, $localStorage) {
    
    $scope.homeWrap = (function () {

        var pub = {
            currentRoute: null,
            pageBits: {
                login: true,
                browse: true,
                logout: true,
                manage: true
            }
        };

        var _this;

        pub.Init = function () {
            //this.SetRouteProgram(GetRouteFromUrl(window.location.href));
            _this = this;
        };

        pub.SetRouteProgram = function (url) {
            $scope.homeWrap.currentRoute = GetRouteFromUrl(url);
            ShowHideMenus(GetRouteFromUrl(url));
        };

        pub.Logout = function () {
            $localStorage.$reset();
            location.href = "#/Login";
        };

        function ShowHideMenus(routeName) {
            if (!_this) {
                console.error("Init failure");
                return;
            }
            switch (routeName) {
                case "Login":
                    _this.pageBits.login = false;
                    _this.pageBits.manage = false;
                    _this.pageBits.browse = false;
                    _this.pageBits.logout = false;
                    break;
                case "Register":
                    _this.pageBits.login = true;
                    _this.pageBits.manage = false;
                    _this.pageBits.browse = false;
                    _this.pageBits.logout = false;
                    break;
                case "Manage":
                    _this.pageBits.login = false;
                    _this.pageBits.manage = false;
                    _this.pageBits.browse = true;
                    _this.pageBits.logout = true;
                    break;
                case "Browse":
                    _this.pageBits.login = false;
                    _this.pageBits.manage = true;
                    _this.pageBits.browse = false;
                    _this.pageBits.logout = true;
                    break;
                case "ImageView":
                    _this.pageBits.login = false;
                    _this.pageBits.manage = true;
                    _this.pageBits.browse = true;
                    _this.pageBits.logout = true;
                    break;
                default:
            }
        }

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
        console.log($localStorage);
    });

}]);