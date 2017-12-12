app.controller('ManageController', ['$scope', '$http', 'FileUploader', '$localStorage', '$mdDialog', function ($scope, $http, FileUploader, $localStorage, $mdDialog) {

    $scope.wrap = (function () {

        var pub = {
            albums: null
        };

        var _this;
        var uploader;

        pub.Init = function () {

            CheckUserSession($localStorage.user);

            _this = this;

            GetAlbumData($localStorage.user.id, function (response) {
                $scope.wrap.albums = response.data;
            });
        };

        pub.OpenAlbum = function (album) {
            $scope.openedAlbum = $scope.wrap.albums[0]; // TODO get selected album
            $mdDialog.show({
                templateUrl: 'AngularContents/Modules/FileUpload/FileUpload.html',
                controller: 'FileUploadController',
                autoWrap: true,
                scope: $scope,
                preserveScope: true
            });
        };

        return pub;

    }());

    function GetAlbumData(userId, callback) {
        // TODO test response, backend needed
        var response = {
            data: [
                {
                    id: 1,
                    title: "Mio favorite albumino",
                    description: "I love you, you album you.",
                    isPublic: true,
                    items: [
                        { id: 1, title: "Image1", description: "Desc1", url: "", isPublic: false },
                        { id: 2, title: "Image2", description: "Desc2", url: "", isPublic: false },
                        { id: 3, title: "Image3", description: "Desc3", url: "", isPublic: false }
                    ]
                }, {
                    id: 2,
                    title: "Shit album, me no like it",
                    description: "You're a disgrace.",
                    isPublic: false,
                    items: [
                        { id: 4, title: "Image4", description: "", url: "", isPublic: false },
                        { id: 5, title: "Image5", description: "", url: "", isPublic: true }
                    ]
                }
            ]
        };
        callback(response);
    }

}]);