/**
 * Created by cipriach on 18.11.2015.
 */
(function () {
    'use strict';

    var app = angular.module('cgkMusicStore');

    app.factory('MusicStoreService',function() {
        var favoriteSongs = {};
        var addToFavorites = function(songName, artistName) {
            favoriteSongs[songName] = {
                songName: songName,
                artistName: artistName
            };
        };



        var getFavorites = function() {
          return favoriteSongs;
        };
        
        return {
            addToFavorites: addToFavorites,
            getFavorites: getFavorites
        };

    });

})();