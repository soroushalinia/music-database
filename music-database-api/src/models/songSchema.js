const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    songName: { type: String, required:true },
    songArtist: { type: String, required:true },
    songCoverArt: { type: String },
    songDescription: { type: String },
    songAlbum: { type: String },
    songGenre: { type: String },
    songReleaseYear: { type: String },
    songLyrics: {type: String}
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);