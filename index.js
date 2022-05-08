
require("dotenv").config();
const express = require("express");
const { mongooseConnect } = require("./DB/mongodb");
const app = express();
const port = process.env.PORT;

mongooseConnect();
app.use(express.json({extended:false}));

app.use('/api/userModel', require('./Api/User'));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
