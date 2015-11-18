/**
 * Created by cipriach on 17.11.2015.
 */
(function () {
    'use strict';

    var app = angular.module('cgkMusicStore');

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/music-store');

        $stateProvider
            .state('music-store', {
                url: '/music-store',
                data: {
                    roles: []
                },
                views: {
                    'music-store': {
                        templateUrl: 'angular/views/music-store.html',
                        controller: 'MusicStoreController'
                    }

                }
            })
            .state('liked-songs', {
                url: '/liked-songs',
                data: {
                    roles: []
                },
                views: {
                    'liked-songs': {
                        templateUrl: 'angular/views/liked-songs.html',
                        controller: 'LikedSongsController'
                    }
                }
            })

    });

})();
