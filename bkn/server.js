const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./exproutes/userRoutes')
app.use('/users', userRoutes);var port = process.env.PORT || 6000;


app.listen(port, function(){
    console.log("serve is running");
});

