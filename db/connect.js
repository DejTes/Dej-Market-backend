// setting up a connection to a MongoDB database using the Mongoose 
const mongoose = require('mongoose');

//This function, connectDB, takes a url argument, which is a MongoDB connection string, and connects to the database using Mongoose's connect method.
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
