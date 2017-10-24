app.controller("ImageViewController", ['$scope', '$state',
    function ($scope, $state) {

        console.log($state.params);
        $scope.imageId = $state.params.imageId;

    }
]);