const mongoose = require("mongoose");

let isConnected = null; // Track connection

exports.connect = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    console.log("=> Connecting to database");
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = db.connections[0].readyState;
    console.log("=> Database connected successfully");
  } catch (error) {
    console.error("=> Error in db connection: ", error.message);
    throw error;
  }
};
