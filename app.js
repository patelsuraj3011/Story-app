const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require('express-handlebars')

const connectDB = require("./config/db")

// config load 
dotenv.config({path :"./config/config.env"})

connectDB();

const app = express();

// Logging 
if(process.env.NODE_ENV === 'develpoment') {
    app.use(morgan('dev'));
}

// handlebars
app.engine('.hbs', exphbs.engine({defaultLayout :'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname,'public')));

// routes
app.use('/', require('./routes/index'));
app.use('/dashBoard', require('./routes/index'));
const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server Started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

