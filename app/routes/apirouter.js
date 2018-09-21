var mongoose = require('mongoose');
var Weapons = require('../models/weapons');

module.exports=function(app,express){
    var apiRouter =express.Router();

    apiRouter.get('/',function(req,res){
        res.json("Welcome to the api");
    });
    apiRouter.get('/weapons' , function(req,res){
        Weapons.find({} , function(err , weapons){
            if(err)
                return res.send(err);
            return res.json(weapons);
        })
    });
    return apiRouter;

};