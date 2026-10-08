const path = require("node:path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");
const connectDB = async () => {

    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Set MONGO_URI in Week11/.env before starting the server.");
    }

        await mongoose.connect(uri);
        console.log("MongoDB connected");
};

module.exports = connectDB;
