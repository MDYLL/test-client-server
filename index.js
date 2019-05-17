let createError = require('http-errors');
let express = require('express');
let path = require('path');
//let logger = require('morgan');
let app = express();
const cors = require('cors');
app.use(cors());
let board = [];
let players = 0;
let gameID = 0;
let flag = false;


app.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query.id);
    console.log(flag);
    if (req.query.id === "begin") {
        players++;
        console.log("start");
        console.log("players - " + players);
        if (players % 2 !== 0) {
            gameID++;
            res.json({
                gameID: -1
            });
        } else {
            board[gameID] = "111111111";
            res.json({
                gameID: gameID,
                yourTurn: 1,
                XO: 'X'
            });
        }
    }
    if (req.query.id === "waiting") {
        console.log("waiting");
        if (players % 2 !== 0) {
            res.json({
                gameID: -1
            });
        } else {
            res.json({
                gameID: gameID,
                yourTurn: 0,
                XO: 'O'
            });
        }
    }
    if (req.query.id === "turn") {
        console.log("turn");
        console.log(req.query);
        let number = parseFloat(req.query.pole);
        console.log(number);
        board[gameID] = board[gameID].substring(0, number) + req.query.xo + board[gameID].substring(number + 1);
        console.log(board[gameID]);
        res.json({
            board: board[gameID]
        })
    }
    if (req.query.id === "waitingBoard") {

        console.log("inside waitingboard");
        console.log(board[gameID]);
        res.json({
            board: board[gameID],
            ok: '1'
        });
    }

    res.sendStatus(200);
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req);
    score = req.body.score;
    res.json(score);
    res.sendStatus(200);
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

app.listen(3003);

//module.exports = app;
