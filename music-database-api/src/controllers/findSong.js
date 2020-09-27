//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');

//Middleware function
const findSong = async (req, res, next) => {
    try {
        songName = req.params.songSearchData.split('_')[0];
        songArtist = req.params.songSearchData.split('_')[1];
        const result = await Song.find({songName: songName, songArtist: songArtist}).exec();
        res.send(result);
    }
    catch(error) {
        res.json(error);
    }
}

//Exporting middleware
module.exports = findSong;