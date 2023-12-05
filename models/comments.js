const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentsSchema = new Schema({
    author: {type: String, required: true} ,
    text: {type:String, required: true},
    date: {type:Date, required: true},
    likes: {type: Number ,required: true},
    image: {type: String}
})

module.exports = mongoose.model("Comments", commentsSchema );