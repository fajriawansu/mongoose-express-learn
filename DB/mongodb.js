require("dotenv").config();
const mongoose = require("mongoose");

async function mongooseConnect() {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("mongodb connected");
    //   const db = client.db('people')

    //     db.collection('name').find().toArray((err, result) => {
    //         if (err) throw err

    //         console.log(result)
    //     })
    })
    .catch(() => {
      console.log("error connect mongodb");
    });
}

module.exports = {
    mongooseConnect
}
