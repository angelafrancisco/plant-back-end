const express = require('express');
const methodOverride = require('method-override')
const { urlencoded } = require('express');
const session = require('express-session')
const cors = require('cors');
const morgan = require('morgan');
const MongoDBStore = require('connect-mongodb-session')(session)
require('dotenv').config();
require('./db-utils/connect')
// const cloudinary = require('cloudinary').v2;
const app = express();

const User = require('./models/user');

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySessions'
});

app.use(cors());
app.options("", cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X - Requested - With, X - CallbackType, Content - Type, Accept");
    res.header("Cache-Control", "no-cache");
    if ("OPTIONS" == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
app.use(express.static("public"));
app.use(require('./middleware/logger'))
const isLoggedIn = require('./middleware/isLoggedIn')
app.use(require('./middleware/isLoggedIn'))
app.use(morgan('short'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const plantController = require('./controllers/plantController');
const userController = require('./controllers/userController');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}));

// cloudinary.config({
//     cloud_name: '',
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

app.use(async (req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn
    if (req.session.isLoggedIn) {
        const currentUser = await User.findById(req.session.userId)
        res.locals.username = currentUser.username
        res.locals.userId = req.session.userId.toString()
    }
    next()
})

app.use('/plants', plantController);
app.use('/user', userController);


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('app is running! better go catch it on port', port);
});