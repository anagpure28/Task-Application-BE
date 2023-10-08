const mongoose =  require("mongoose");
require("dotenv").config()

// Connecting the database
const connection = mongoose.connect(process.env.mongoURL)

module.exports = {
    connection
}