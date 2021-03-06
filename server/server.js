const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/../.env" });

const bodyParser = require("body-parser");
const db = require("../db/db");

app.use(bodyParser.json({ urlencoded: false }));
app.use(cors());
app.use(express.static("dist"));

//user clicks a product, request all product photos
app.get("/photos", (req, res) => {
  const productId = req.query.id;
  db.getProductPics(productId, (error, results) => {
    if (error) {
      console.log("server failed to load photos ", error);
      res.end();
    } else {
      console.log("5ZZZ", results);
      res.send(results);
    }
  });
});

//user clicks a product, request product name
app.get("/product/id", (req, res) => {
  const productId = req.query.id;
  db.getProductName(productId, (error, result) => {
    if (error) {
      console.log("server failed to get product name ", error);
      res.end();
    } else {
      console.log("5YYY", result);
      res.send(result);
    }
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
