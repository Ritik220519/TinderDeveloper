const mongoose = require("mongoose")

async function connectDB(){

    await mongoose.connect("mongodb+srv://rtksri123_db_user:Ritik21@tinderdeveloper.if87nba.mongodb.net/tinderdeveloperDB");

}

module.exports = {
    connectDB
}