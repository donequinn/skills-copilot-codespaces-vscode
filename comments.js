//Create web server
var express = require('express');
var router = express.Router();
var comments = require('../models/comments');
var mongoose = require('mongoose');

//Get all comments
router.get('/', function (req, res) {
    comments.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        res.json(data);
    });
});

//Get comment by id
router.get('/:id', function (req, res) {
    comments.findById(req.params.id, function (err, data) {
        if (err) {
            console.log(err);
        }
        res.json(data);
    });
});

//Create new comment
router.post('/', function (req, res) {
    var comment = new comments({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        username: req.body.username
    });
    comment.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Comment created');
    });
});

//Update comment by id
router.put('/:id', function (req, res) {
    comments.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Comment updated');
    });
});

//Delete comment by id
router.delete('/:id', function (req, res) {
    comments.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Comment deleted');
    });
});

module.exports = router;