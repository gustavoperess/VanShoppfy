const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tokenChecker = require("./middleware/tokenChecker");
const usersRouter = require("./routes/users");
const userOrderRouter = require("./routes/userorders");
const cartRouter = require("./routes/carts");
const authenticationRouter = require("./routes/authentication");
const productRouter = require("./routes/products");
const app = express();
const cookieParser = require('cookie-parser');

// Define CORS options
const allowedOrigins = [
  'https://mango-forest-09f2f4f03.5.azurestaticapps.net', 
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request's origin is in the allowedOrigins array
    if (!origin || allowedOrigins.includes(origin)) {
      console.log(`CORS request allowed from origin: ${origin}`);
      callback(null, true); // Allow the request
    } else {
      console.log(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
  credentials: true, // Allow cookies
};

// Enable CORS
app.use(cors(corsOptions));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(cookieParser());

// Route handlers
app.use("/tokens", authenticationRouter);
app.use("/users", usersRouter);
app.use("/userorders", userOrderRouter);
app.use('/uploads', express.static('uploads'));
app.use("/products", productRouter);
app.use("/carts", cartRouter);

// 404 Not Found Middleware
app.use((_req, res) => {
  res.status(404).json({ err: "Error 404: Not Found" });
});

// Error Handling Middleware
app.use((err, _req, res, _next) => {
  console.error(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send(err.message);
  } else {
    res.status(500).json({ err: "Something went wrong" });
  }
});

module.exports = app;
