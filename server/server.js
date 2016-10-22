// APP CONFIGURATION ////////////////

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();


app.listen(4545, function() {
  console.log('Listening on port 4545');
});

var corsOptions = {
  origin: 'http://localhost:4545'
};

// MIDDLEWARE //////////////////////

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

// ENDPOINTS /////////////////////

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);
app.get('/api/currentUserName', profileCtrl.getCurrentUserName)
