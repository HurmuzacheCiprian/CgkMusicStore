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

        var allSongs = [
            {
                artistName: 'Beatles',
                songName: 'Drive my car'
            },
            {
                artistName: 'John Lennon',
                songName: 'Imagine'
            },
            {
                artistName: 'Coldplay',
                songName: 'Fix you'
            },
            {
                artistName: 'Rammstein',
                songName: 'Amour'
            }
        ];

        $scope.headers = headers;
        $scope.musicStore = allSongs;

        $scope.addToFavorites = function(songName, artistName) {
            MusicStoreService.addToFavorites(songName, artistName);

        };

    };

    app.controller('MusicStoreController', ['$scope','MusicStoreService', MusicStoreController]);

})();