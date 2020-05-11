var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..', 'public')));

// prepare routes
app.use('/', require('./routes/login'));
app.use('/', require('./routes/inicio'));
app.use('/', require('./routes/avisos'));
app.use('/', require('./routes/ocorrencias'));
app.use('/', require('./routes/reservas'));
app.use('/', require('./routes/agenda'));
app.use('/', require('./routes/enquetes'));
app.use('/', require('./routes/boleto'));
app.use('/', require('./routes/contas'));
app.use('/', require('./routes/perdidos'));
app.use('/', require('./routes/perfil'));
app.use('/', require('./routes/gerenciarPerfis'));
app.use('/', require('./routes/cadastro'));
app.use('/', require('./routes/config'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;