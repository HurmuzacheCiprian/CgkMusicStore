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
            name: 'Add to favorites'
        }];

        var musicStoreresponse = [
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
        $scope.musicStore = musicStoreresponse;
    };

    app.controller('MusicStoreController', ['$scope', MusicStoreController]);

})();