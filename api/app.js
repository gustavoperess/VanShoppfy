const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tokenChecker = require("./middleware/tokenChecker");
const usersRouter = require("./routes/users");
const userOrderRouter = require("./routes/userorders");
const cartRouter = require("./routes/carts")
const authenticationRouter = require("./routes/authentication");
const productRouter = require("./routes/products")
const app = express();
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: 'https://mango-forest-09f2f4f03.5.azurestaticapps.net', 
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/tokens",  authenticationRouter);
app.use("/users", usersRouter);
app.use("/userorders", userOrderRouter);
app.use('/uploads', express.static('uploads'));
app.use("/products", productRouter);
app.use("/carts", cartRouter)


// 404 Not Found Middleware
app.use((_req, res) => {
    res.status(404).json({ err: "Error 404: Not Found" });
  });
  
  // Error Handling Middleware
  app.use((err, _req, res, _next) => {
    console.error(err);
    if (process.env.NODE_ENV === "production") { // i changed this
      res.status(500).send(err.message);
    } else {
      res.status(500).json({ err: "Something went wrong" });
    }
  });
  
module.exports = app;
