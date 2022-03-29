require('dotenv').config();
const express = require('express');
const { urlencoded } = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// db utils
// connect to mongodb
const mongoURI = process.env.MONGO_URI;
// MONGO_URI link in .env file!
// connect to mongo
const db = mongoose.connection;
// when connected to mongo it displays this message
mongoose.connect(mongoURI, () => console.log('mongo connected:', mongoURI));
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// controllers
const plantController = require('./controllers/plantController');

// middleware
// morgan is a logging middleware library, logs each request as it comes in
app.use(morgan('short'));
// cors lets express accept requests other than itself (cross origin requests)
app.use(cors());
// public folder for assets
app.use(express.static("public"));
// populate req.body from forms, if none returns empty object
app.use(express.urlencoded({ extended: true }));
// parses json
app.use(express.json());

// routes in itemController
app.use('/plants', plantController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('app is running! better go catch it on port', port);
});