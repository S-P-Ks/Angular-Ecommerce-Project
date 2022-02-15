const express = require("express");
const http2 = require("http2");
const https = require("https");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/index"));
app.use("/products", require("./routes/products"));

app.get("/", (req, res) => {
  res.send("he");
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(5000, () => console.log(`Server started on 5000`));
  })
  .catch((error) => console.log(error));
