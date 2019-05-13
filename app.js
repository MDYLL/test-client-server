let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let app = express();
const cors = require('cors');
app.use(cors());
let score=15;

app.get('/',(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(score);
  res.sendStatus(200);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post("/", function (req, res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req);
  score=req.body.score;
  res.json(score);
  res.sendStatus(200);
});


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
});

app.listen(3003);

//module.exports = app;
