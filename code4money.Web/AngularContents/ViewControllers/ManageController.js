app.controller('ManageController', ['$scope', function ($scope) {

    $scope.wrap = (function () {

        var pub = {};

        pub.Init = function () {
            console.log("ManageController Init");
        };

        return pub;

    }());

}]);