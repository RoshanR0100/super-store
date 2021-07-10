// server/index.js
require('dotenv').config();

const express = require("express");

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose')

const app = express();




// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../src')));

app.get("/", (req, res) => {
  res.json({message: "This should load the react app"});
})

app.get("/api", (req, res) => {
  res.json({message: "Hello from the server"});
});

//Import Routes
const UserRoute = require('./src/routes/users.js');
const ItemRoute = require('./src/routes/item.js');

app.use('/users', UserRoute);
app.use('/items', ItemRoute);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.getFile(path.resolve(__dirname, '../src', 'index.html'));
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
   { useNewUrlParser: true },
  // { useUnifiedTopology: true }, 
  () => console.log("Connected to DB!") 
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});