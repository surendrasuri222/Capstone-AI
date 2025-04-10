const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://venkat:venkat123@chatgptapi.yah6lek.mongodb.net/?retryWrites=true&w=majority&appName=ChatgptApi"
    );
    console.log("DataBase Connected Succesfully");
  } catch (err) {
    console.log("Error Mongoose-", err);
  }
}

module.exports = connectDB;
