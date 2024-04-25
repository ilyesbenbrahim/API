// console.log("hi");
const express = require("express");
const {MongoClient} = require("mongodb");

const url = "mongodb+srv://benbrahimahcene:p7MkOfNzM5V9g7rt@cluster0.q5rzqzs.mongodb.net/initial";


const client = new MongoClient(url)

client.connect()
.then(async()=>{
  console.log("ok")
  const databse = client.db('initial')
  const collection = databse.collection('user')
  const user = await collection.find({}).toArray()
  console.log(user)
})

const app = express();
app.get("/", (req, res) => {
  res.send("hello node api ");
});

app.get("/blog", (req, res) => {
  res.send("hollo blog ");
});

app.listen(3000, () => {
  console.log("node api app is running on port 3000");
});




