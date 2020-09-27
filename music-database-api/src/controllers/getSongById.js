//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');
const router = require('../routes/api');

//Middleware function
const getSongById = async (req, res, next) => {
    try {
        console.log(req.params.id)
        const result = await Song.findById(req.params.id).exec();
        res.send(result);
    }
    catch(error) {
        res.json(error);
    }
}

//Exporting middleware
module.exports = getSongById;