const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const ******** = require('./routes/*****.router');
const ********* = require("./routes/*****.router");
const ******** = require("./routes/********.router");
const ******* = require('./routes/********.router');
const ********* = require('./routes/***********.router');
const swaggerUI = require('swagger-ui-express');
const app = express();
const db = require("./db")()
require('dotenv').config();



//---------------  APP  ---------------//

app.use(express.json({ limit: '******' }));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false, limit: '******' }));
app.use(cookieParser());


//---------------  CORS  ---------------//

app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "***********, *****,  ********, **********, *********");
	next();
});


//---------------  APP ROUTER  ---------------//

app.use('/*******/', *********);
app.use('/*******/******', *********);
app.use('/*******/********', *************);
app.use('/*******/********', **************);
app.use('/*******/*********', **********);



//---------------  PORT  ---------------//

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`))


module.exports = app;