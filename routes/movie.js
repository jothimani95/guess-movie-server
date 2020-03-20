const router = require('express').Router();

let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('hi');
    Movie.find()
      .then(movies => res.json(movies))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;