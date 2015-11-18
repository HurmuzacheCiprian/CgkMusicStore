/**
 * Created by cipriach on 17.11.2015.
 */
(function () {
    'use strict';

    var app = angular.module('cgkMusicStore');


    var MusicStoreController = function ($scope, MusicStoreService) {
        var headers = [{
            name: 'Artist name'
        }, {
            name: 'Song name'
        }, {
            name: 'Add to favorites'
        }];

        $scope.headers = headers;
        $scope.musicStore = MusicStoreService.getAllSongs();

        $scope.addToFavorites = function(songName, artistName) {
            MusicStoreService.addToFavorites(songName, artistName);
        };

        $scope.removeFromFavorites = function(songName) {
            MusicStoreService.removeFromFavorites(songName);

        };

        $scope.isAddedToFavorites = function(songName) {
            return MusicStoreService.isAddedToFavorites(songName);
        };

    };

    app.controller('MusicStoreController', ['$scope','MusicStoreService', MusicStoreController]);

})();