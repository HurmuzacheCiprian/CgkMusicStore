/**
 * Created by cipriach on 18.11.2015.
 */
(function () {

    'use strict';

    var app = angular.module('cgkMusicStore');

    var LikedSongsController = function ($scope, MusicStoreService) {
        var headers = [{
            name: 'Artist name'
        }, {
            name: 'Song name'
        }];

        $scope.headers = headers;

        $scope.likedSongs = MusicStoreService.getFavorites();


    };

    app.controller('LikedSongsController', ['$scope', 'MusicStoreService', LikedSongsController]);


})();