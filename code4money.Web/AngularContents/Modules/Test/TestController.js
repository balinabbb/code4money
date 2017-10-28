app.controller('TestController', ['$scope', '$http', function ($scope, $http) {

    $scope.GetTestData = function () {
        console.log("GetTestData");
        $http({
            method: 'GET',
            url: '/Test/MyGetMethod?counter=4'
        }).then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    };

    $scope.PostTestData = function () {
        console.log("PostTestData");
        $http({
            method: 'POST',
            url: '/Test/MyPostMethod',
            data: { id: 1 }
        }).then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    };

}]);