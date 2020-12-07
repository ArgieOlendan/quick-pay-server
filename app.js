var express = require("express");
var mongoose = require("mongoose");
var body_parser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");

var app = express();

// Bodyparser Middleware
app.use(body_parser.json());

// Cors Middleware
app.use(cors());

// Morgan Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// DB Config
var db = require("./config/db/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/item'));

var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));