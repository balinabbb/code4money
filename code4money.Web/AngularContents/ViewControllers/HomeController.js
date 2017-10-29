app.controller('HomeController', ['$scope', function ($scope) {

    $scope.wrap = (function () {

        var pub = {
            currentRoute: null,
            pageBits: {
                login: true,
                browse: true,
                logout: true,
                manage: true
            }
        };

        pub.Init = function () {
            //this.SetRouteProgram(GetRouteFromUrl(window.location.href));
        };

        pub.ShowHideMenus = function (routeName) {
            switch (routeName) {
                case "Login":
                    this.pageBits.login = false;
                    this.pageBits.manage = false;
                    this.pageBits.browse = false;
                    this.pageBits.logout = false;
                    break;
                case "Register":
                    this.pageBits.login = true;
                    this.pageBits.manage = false;
                    this.pageBits.browse = false;
                    this.pageBits.logout = false;
                    break;
                case "Manage":
                    this.pageBits.login = false;
                    this.pageBits.manage = true;
                    this.pageBits.browse = true;
                    this.pageBits.logout = true;
                    break;
                case "Browse":
                    this.pageBits.login = false;
                    this.pageBits.manage = true;
                    this.pageBits.browse = true;
                    this.pageBits.logout = true;
                    break;
                case "ImageView":
                    this.pageBits.login = false;
                    this.pageBits.manage = true;
                    this.pageBits.browse = true;
                    this.pageBits.logout = true;
                    break;
                default:
                    console.error("Not a valid route name! " + routeName);
            }
        };

        pub.SetRouteProgram = function (url) {
            $scope.wrap.currentRoute = GetRouteFromUrl(url);
            $scope.wrap.ShowHideMenus(GetRouteFromUrl(url));
        };

        pub.Logout = function () {
            location.href = "#/Login";
        };

        return pub;

    }());

    function GetRouteFromUrl(url) {
        console.log(url);
        var urlParts = url.split("/");
        var i = 0;
        while (i < urlParts.length && urlParts[i] !== "#")
            i++;
        if (i < urlParts.length && (i + 1) < urlParts.length) {
            return urlParts[i + 1];
        }
        return null;
    }

    $scope.$on('$locationChangeStart', function (event, to, from) {
        if (!event || !to || !from)
            return;

        $scope.wrap.SetRouteProgram(to);
    });

}]);