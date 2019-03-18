var express = require('express');
var router = express.Router();

var config = require('../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true },{useNewUrlParser: true });
db.bind('users');

var service = {};

service.authenticate = authenticate;

router.post('/authenticate' , (req,res)=>{

    console.log("==================inside authenticate");
// console.log(`req.username ${req.username}    , pass ${req.password}`);

//     authenticate(username,password)

res.send('welcome here !')
})

function authenticate(username, password) {     
    
    console.log("usernaem ,pass" , username,password);
        var deferred = Q.defer();
    
    console.log("inside");
    
    //console.log("DB   ........USERS ",db.users.find());
    
        db.users.findOne({ username: username }, function (err, user) {
            console.log("inside   of ...................!!!");
            console.log("user hash ");
          //  console.log(`user name ${user.name}`);
            if (err)
            {  console.log("inside error ");
                deferred.reject(err.name + ': ' + err.message);
            
            }
            if (user && bcrypt.compareSync( password, user.hash  )) {
    
             
                // authentication successful
                deferred.resolve({
                  
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    
                    token: jwt.sign({username: user.username,
                                         orgName: user.orgName },
                                          config.secret)
                });
    
    
            } else {
    
    
                // authentication failed
                deferred.resolve();
    
    
            }
        });
    
        return deferred.promise;
    
    }

    module.exports=router;