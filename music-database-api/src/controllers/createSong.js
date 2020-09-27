//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');



//Middleware function
const createSong = async (req, res, next) => {
    try {
        const resultSong = new Song({
            songName: req.body.songName,
            songArtist: req.body.songArtist,
            songCoverArt: req.body.songCoverArt,
            songDescription: req.body.songDescription,
            songAlbum: req.body.songAlbum,
            songGenre: req.body.songGenre,
            songReleaseYear: req.body.songReleaseYear,
            songLyrics: req.body.songLyrics
        });
        const result = await resultSong.save();
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}

//Exporting middleware
module.exports = createSong;