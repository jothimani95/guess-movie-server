const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movie_name: {
    type: String,
    required: true,
    trim: true,
  },
  movie_year: {
    type: Number,
    required: true,
    trim: true,
  }
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;