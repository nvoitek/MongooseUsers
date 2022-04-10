const express = require("express");
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/all', function(req, res){
    user.list(function(err, users){
        if(err) {
            res.status(404);
            res.json({
                error: "Users not found"
            });
        } else {
            res.json(users);
        }
    });
});

module.exports = router;