const express = require('express');
const methodOverride = require('method-override')
const { urlencoded } = require('express');
const session = require('express-session')
const cors = require('cors');
const morgan = require('morgan');
const MongoDBStore = require('connect-mongodb-session')(session)
require('dotenv').config();
require('./db-utils/connect')
const app = express();

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySessions'
});

// middleware
app.use(require('./middleware/logger'))
// const isLoggedIn = require('./middleware/isLoggedIn')
// app.use(require('./middleware/isLoggedIn'))
app.use(morgan('short'));
app.use(cors());
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// controllers
const plantController = require('./controllers/plantController');
const userController = require('./controllers/userController');

// NEW SESSION OBJECT
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}));

// Controllers
app.use('/plants', plantController);
app.use('/user', userController);

// PORT
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('app is running! better go catch it on port', port);
});