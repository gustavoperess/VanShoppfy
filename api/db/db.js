const mongoose = require("mongoose");

function keepDbAlive() {
  mongoose.connection.db.command({ ping: 1 })
    .then(() => console.log("DB ping successful"))
    .catch((err) => console.error("DB ping failed:", err));
}
// trying new changes
const connectToDatabase = async () => {
  const mongoDbUrl = process.env.MONGODB_URL;

  if (!mongoDbUrl) {
    console.error("No MongoDB url provided...");
    throw new Error("No connection string provided");
  }

  try {
    await mongoose.connect(mongoDbUrl);
    console.log("Successfully connected to MongoDB");


    setInterval(keepDbAlive, 600000); 
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};

module.exports = { connectToDatabase };
