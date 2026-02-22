// Day 26 Logic Practice
console.log('Lab Session 26 Started');

const display = document.getElementById('display');
display.innerText = 'Logic Engine Online';

// Practice your JS code here...

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("Database connected successfully");

    const db = client.db("unify_labs");
    const products = await db.collection("products").find({}).toArray();

    console.log(products);
  } catch (error) {
    console.error("Database connection failed ❌");
    console.error(error.message);
  } finally {
    await client.close();
  }
}

connectDB();
