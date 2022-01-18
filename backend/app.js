const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const environmentConfig = require('./config/environment');
const _ = require('lodash');

// ENVIRONMENT
// TODO: Use dotenv properly
// Get --env argv
let environment;
_.each(process.argv, argv => {
    const arg = _.split(argv.toString(), '=');
    if (arg[0] === '--env') {
        environment = arg[1];
    }
});

if (_.isEmpty(environment)) {
    environment = 'development';
}
env = _.get(environmentConfig, environment);
process.currentEnv = env;

console.log('ENVIRONMENT: ' + environment);


// Load routes
const userRoutes = require('./routes/user/routes');
const walletFatherRoutes = require('./routes/walletFather/routes');
const walletRoutes = require('./routes/wallet/routes');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'angular')));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');

  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, HEAD');
  res.setHeader('Allow', 'POST, GET, PATCH, DELETE, OPTIONS, HEAD');

  // Check if preflight requestpm2
  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
  }
  else {
    // Pass to next layer of middleware
    next();
  }
});


// Declare routes
app.use('/api/user', userRoutes);
app.use('/api/wallet-father', walletFatherRoutes);
app.use('/api/wallet', walletRoutes);


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json('error');
// });

// Connect to mongodb
mongoose.connect(process.currentEnv.mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB Connected");
  })

module.exports = app;