const asyncHandler = require('express-async-handler');
const Comment = require('../models/comments');
const mongoose = require('mongoose');


exports.get = asyncHandler(async (req, res, next) => {
    const getComments = await Comment.find().sort({ date: 'desc' }).exec();
    res.json(getComments)
   });

exports.post = asyncHandler(async (req, res, next) => { 
    const post = new Comment({
        author: req.body.author,
        date:req.body.date,
        text: req.body.text,
        likes: req.body.likes,
        image: req.body.image
    })
    const save = await post.save()
    return res.status(201).json(save)
});
exports.delete = asyncHandler(async (req, res, next) => {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    res.json(201)
});
exports.getIndividual = asyncHandler(async (req, res, next) => {
    const getIndividual = await Comment.findById(req.params.id);
    res.json(getIndividual)
   });
exports.updateText = asyncHandler(async (req, res, next) => {
    const updateText = await Comment.findByIdAndUpdate(req.params.id, {text: req.body.text});
    res.json(201)
});