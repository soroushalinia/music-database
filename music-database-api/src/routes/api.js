//Loading requirements
const express = require('express');
const router = express.Router();

//Loading controllers
const createSong = require('../controllers/createSong');
const getSongs = require('../controllers/getSongs');
const findSong = require('../controllers/findSong');
const getSongById = require('../controllers/getSongById');
const deleteSong = require('../controllers/deleteSong');
const updateSong = require('../controllers/updateSong');



// API route
router.get('/', (req, res) => {
  res.send('Welcome To Music Database API');
});

router.post('/createSong', (req, res) => {
    createSong(req, res);
});

router.get('/getSongs', (req, res) => {
    getSongs(req, res);
});

router.get('/findSong/:songSearchData', (req, res) => {
  findSong(req, res);
});

router.get('/getSongById/:id', (req, res) => {
  getSongById(req, res);
});

router.post('/updateSong', (req, res) => {
  updateSong(req, res);
});

router.delete('/deleteSong/:id', (req, res) => {
  deleteSong(req, res);
});


//Exporting our routes
module.exports = router;