app.controller('BrowseController', ['$scope', '$http', function ($scope, $http) {

    $scope.wrap = (function () {

        var pub = {};

        return pub;

    }());

    function GetImages() {
        return [
            "http://localhost:58868/Uploads/001.jpg",
            "http://localhost:58868/Uploads/002.jpg",
            "http://localhost:58868/Uploads/003.jpg",
            "http://localhost:58868/Uploads/004.jpg",
            "http://localhost:58868/Uploads/005.jpg",
            "http://localhost:58868/Uploads/006.jpg",
            "http://localhost:58868/Uploads/007.jpg",
            "http://localhost:58868/Uploads/008.png",
        ];
    }

    angular.element(document).ready(function () {

        var $grid = $('#msnryGrid').masonry({
            columnWidth: 225,
            itemSelector: '.grid-item'
        });

        var images = GetImages();
        for (var i = 0; i < images.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "grid-item");
            var img = document.createElement("img");
            img.setAttribute("src", images[i]);
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

}]);