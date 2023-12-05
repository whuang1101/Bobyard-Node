const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
mongoDb = process.env.SECRET_KEY;
const fs = require('fs')
const Comments = require('./models/comments')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoDb);
}
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const commentRouter = require("./routes/commentRouter")
app.use("/comments", commentRouter)

const port= process.env.PORT || 3000;

const data = JSON.parse(fs.readFileSync('./comments.json', 'utf-8'))
const importData = async () => {
    try {
      await Comments.create(data)
      console.log('data successfully imported')
      // to exit the process
      process.exit()
    } catch (error) {
      console.log('error', error)
    }
  }
//   console.log(data)
// importData()
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on ${port}`);
})