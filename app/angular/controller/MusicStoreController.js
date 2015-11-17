/**
 * Created by cipriach on 17.11.2015.
 */
(function () {
    'use strict';

    var app = angular.module('cgkMusicStore');


    var MusicStoreController = function ($scope) {
        var headers = [{
            name: 'Artist name'
        }, {
            name: 'Song name'
        }, {
            name: 'Like'
        }];

        $scope.headers = headers;
    };

    app.controller('MusicStoreController', ['$scope', MusicStoreController]);

})();