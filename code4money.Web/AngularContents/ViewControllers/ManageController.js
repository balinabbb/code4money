app.controller('ManageController', ['$scope', '$http', 'FileUploader', '$localStorage', function ($scope, $http, FileUploader, $localStorage) {

    // TODO after upload (response success), wait 5 sec then remove file from queue and add to uploaded image
    
    $scope.wrap = (function () {

        // Public properties
        var pub = {
            uploader: null,
            uploadedImageList: []
        };

        // Private properties
        var _this;
        var uploader;

        // Public methods
        pub.Init = function () {

            CheckUserSession($localStorage.user);

            _this = this;

            // init uploader
            uploader = _this.uploader = new FileUploader({
                url: '/Manage/UploadImages'
            });

            // get images
            GetImageList(10, function (response) {

                _this.uploadedImageList = response.data;

                // add uploader test events
                _this.InitTestProperties();

                // add already existing elements to ui
                //_this.uploader.addToQueue(response.data);

            });
        };

        pub.InitTestProperties = function () {
            uploader.filters.push({
                name: 'customFilter',
                fn: function (item /*{File|FileLikeObject}*/, options) {
                    return this.queue.length < 10;
                }
            });

            uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onAfterAddingFile = function (fileItem) {
                console.info('onAfterAddingFile', fileItem);
            };
            uploader.onAfterAddingAll = function (addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);
            };
            uploader.onBeforeUploadItem = function (item) {
                console.info('onBeforeUploadItem', item);
            };
            uploader.onProgressItem = function (fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            uploader.onProgressAll = function (progress) {
                console.info('onProgressAll', progress);
            };
            uploader.onSuccessItem = function (fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
            };
            uploader.onErrorItem = function (fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            uploader.onCancelItem = function (fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            uploader.onCompleteItem = function (fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            uploader.onCompleteAll = function () {
                console.info('onCompleteAll');
            };
        };

        pub.DeleteImage = function (item) {
            DeleteImages(null, [item], function (response) {
                if(response.data)
                    RemoveFromUploadedImageList(item);
            });
        };

        // Private methods
        function RemoveFromUploadedImageList(item) {
            var i = _this.uploadedImageList.indexOf(item);
            if (i > -1) {
                _this.uploadedImageList.splice(i, 1);
                return true;
            } else
                return false;
        }

        function AddToUploadedImageList(item) {
            _this.uploadedImageList.push(item);
        }

        function AddListToUploadedImageList(items) {
            for (var i = 0; i < items.length; i++) {
                AddToUploadedImageList(items[i]);
            }
        }

        return pub;

    }());   

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

    function DeleteImages(user, images, callback) {
        var d = {
            user: user,
            images: images
        };
        $http({
            method: 'POST',
            url: '/Manage/DeleteImages',
            data: d
        }).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    }

}]);