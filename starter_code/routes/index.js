const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => console.error('Error finding movies in the database', err))
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('detailed-movie', { movie });
    })
    .catch(err => console.error('Error finding movies in the database', err))
});

module.exports = router;