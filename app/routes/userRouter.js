const express = require("express");
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/', function(req, res){
    user.list(function(err, users){
        if(err) res.send(err);
        res.render('user', {users});
    });
});

module.exports = router;