import mongoose from "mongoose";

const USERNAME = "BrunoDelani";
const PASSWORD = "n8fw7EX64UlF2K16";
const DATABASE = "alura-node";

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@nodeapi.w1es0.mongodb.net/${DATABASE}`)

let db = mongoose.connection;

export default db;