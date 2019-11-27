const express = require('express');
const app = express();
const userRoutes = express.Router();

const User = require('../m/User');

userRoutes.route('/new').post(function (req, res){
    var user = new User(req.body);
        user.save()
       .then(user => {
           res.status(200).json({'user': 'user created successfully'});
       })
       .catch(err => {
           res.status(400).send("couldn`t");
       });
});

userRoutes.route('/').get(function(req, res) {
    User.find(function (err, users) {
        if(err){
            console.log(err);
        }
        else{
            res.json(users);
        }
    });
});

module.exports = userRoutes