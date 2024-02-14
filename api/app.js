const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tokenChecker = require("./middleware/tokenChecker");
const usersRouter = require("./routes/users");
const authenticationRouter = require("./routes/authentication");
const productRouter = require("./routes/products")
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/tokens",  authenticationRouter);
app.use("/users", usersRouter);
app.use('/uploads', express.static('uploads'));
app.use("/products", productRouter);

// 404 Not Found Middleware
app.use((_req, res) => {
    res.status(404).json({ err: "Error 404: Not Found" });
  });
  
  // Error Handling Middleware
  app.use((err, _req, res, _next) => {
    console.error(err);
    if (process.env.NODE_ENV === "development") {
      res.status(500).send(err.message);
    } else {
      res.status(500).json({ err: "Something went wrong" });
    }
  });
  
module.exports = app;