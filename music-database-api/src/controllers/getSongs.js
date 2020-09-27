//Loading required modules
const mongoose = require('mongoose');
const Song = require('../models/songSchema');

//Middleware function
const getSong = async (req, res, next) => {
    try {
        const result = await Song.find().exec();
        res.json(result);
    }
    catch (error) {
        res.json(error);  
    }
}

//Exporting middleware
module.exports = getSong;