//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');

//Middleware function
const deleteSong = async (req, res, next) => {
    try {
        const result = await Song.findByIdAndDelete({_id: req.params.id}).exec();
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}

//Exporting middleware
module.exports = deleteSong;