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
  // 'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(`Incoming request with origin: ${origin}`);
    if (!origin) {
      // console.log(`CORS request allowed from origin: undefined (likely server-to-server request)`);
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      // console.log(`CORS request allowed from origin: ${origin}`);
      return callback(null, true);
    } else {
      // console.log(`Blocked by CORS: ${origin}`);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // specify allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // specify allowed headers
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
