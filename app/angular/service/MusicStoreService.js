/**
 * Created by cipriach on 18.11.2015.
 */
(function () {
    'use strict';

    var app = angular.module('cgkMusicStore');

    app.factory('MusicStoreService',function() {
        var favoriteSongs = {},
            allSongs = [
                {
                    artistName: 'Beatles',
                    songName: 'Drive my car',
                    addedToFavorites: false
                },
                {
                    artistName: 'John Lennon',
                    songName: 'Imagine',
                    addedToFavorites: false
                },
                {
                    artistName: 'Coldplay',
                    songName: 'Fix you',
                    addedToFavorites: false
                },
                {
                    artistName: 'Rammstein',
                    songName: 'Amour',
                    addedToFavorites: false
                }
            ];
        var addToFavorites = function(songName, artistName) {
            favoriteSongs[songName] = {
                songName: songName,
                artistName: artistName
            };
            for(var i=0;i<allSongs.length;i++) {
                if(allSongs[i].songName == songName) {
                    if(!allSongs[i].addedToFavorites) {
                        console.log('Set to true for '+songName);
                        allSongs[i]['addedToFavorites'] = true;
                    }
                }
            }
        };



        var getFavorites = function() {
          return favoriteSongs;
        };

        var removeFromFavorites = function(songName) {
            delete favoriteSongs[songName];
            for(var i=0;i<allSongs.length;i++) {
                if(allSongs[i].songName == songName) {
                    if(allSongs[i].addedToFavorites ) {
                        console.log('Reset to false for '+songName);
                        allSongs[i]['addedToFavorites'] = false;
                    }
                }
            }
        };

        var getAllSongs = function() {
            return allSongs;
        };

        var isAddedToFavorites = function(songName) {
            for(var i=0;i<allSongs.length;i++) {
                if(allSongs[i].songName == songName) {
                    return allSongs[i].addedToFavorites;
                }
            }
        };
        
        return {
            addToFavorites: addToFavorites,
            getFavorites: getFavorites,
            removeFromFavorites: removeFromFavorites,
            getAllSongs: getAllSongs,
            isAddedToFavorites : isAddedToFavorites
        };

    });

})();