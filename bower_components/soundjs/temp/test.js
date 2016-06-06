var request = require("request");
var fs = require('fs');
var SoundCloud = require('../src/main');
var _ = require('underscore');

var clientId = 'c02c06ed4d1f681c89fd159ad872fd38',
    clientSecret = 'db35cd9a20ec3e0a7e068c4a1124c30f',
    redirectUri = 'http://fgag.tv/',
    userName = 'fgagsound@gmail.com',
    password = 'johnpradeep$1';

var sc = new SoundCloud(clientId, clientSecret, userName, password, redirectUri);

sc.playlists().then(function(playlist) {

    var dailyFireTamil = _.findWhere(playlist, {
        'title': 'Daily Fire Tamil'
    });
    var dailyFireEnglish = _.findWhere(playlist, {
        'title': 'Daily Fire English'
    });

    // console.log(dailyFireTamil.title);
    // console.log(dailyFireEnglish.title);

    // sc.addTrack('url test', 'url test', 'test genre', function() {
    //     return request('http://traffic.libsyn.com/revpaulthangiah/28_02_2014_T.mp3')
    // }).then(function(track) {
    //     console.log('track uploaded...');
    //     console.log(dailyFireTamil);
    //     dailyFireTamil.addTrack(track);
    // });

    dailyFireTamil.tracks().then(function(tracks) {
        console.log(tracks);
        tracks[0].updateReleaseDate('01/01/2222').then(function() {
            console.log('updated');
        });
    })
});