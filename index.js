const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://jothimani95:Jm@ni1995@cluster0-nejua.gcp.mongodb.net/guess_movie?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const movieRouter = require('./routes/movie');

app.use('/', movieRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});