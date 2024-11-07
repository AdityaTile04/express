const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnection = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

dbConnection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Some error in databse : ${err}`);
  });

module.exports = dbConnection;
