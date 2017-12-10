app.controller('BrowseController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.wrap = (function () {

        var pub = {};

        pub.Init = function () {
            CheckUserSession($localStorage.user);
        };

        return pub;
    }());

    angular.element(document).ready(function () {

        var $grid = $('#msnryGrid').masonry({
            columnWidth: 225,
            itemSelector: '.grid-item'
        });

        GetImageList($localStorage.user.id, function (response) {

            if (!response.data)
                return;

            var images = response.data;
            var pageUrl = "/Uploads/";

            for (var i = 0; i < images.length; i++) {
                var div = document.createElement("div");
                div.setAttribute("class", "grid-item");
                var img = document.createElement("img");
                img.setAttribute("src", pageUrl + images[i].name);
                img.setAttribute("alt", "image");
                div.appendChild(img);

                $grid.masonry()
                    .append(div)
                    .masonry('appended', div)
                    .masonry();
            }

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });

        });

    });

    function GetImageList(userId, callback) {
        $http({
            method: 'GET',
            url: '/Manage/GetImageList?userId=' + userId
        }).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    }

}]);