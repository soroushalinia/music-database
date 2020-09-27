//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');

//Middleware function
const updateSong = async (req, res, next) => {
    try {
        const songID = req.body.id;
        const result = await Song.findByIdAndUpdate(songID, {
            songName: req.body.songName,
            songArtist: req.body.songArtist,
            songCoverArt: req.body.songCoverArt,
            songDescription: req.body.songDescription,
            songAlbum: req.body.songAlbum,
            songGenre: req.body.songGenre,
            songReleaseYear: req.body.songReleaseYear,
            songLyrics: req.body.songLyrics
        });
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}

//Exporting middleware
module.exports = updateSong;