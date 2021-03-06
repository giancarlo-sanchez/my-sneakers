const express = require("express");
const morgan = require("morgan");
const { environment } = require('./config');
const cors = require("cors");

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const sneakerRouter = require('./routes/sneakers');
const brandRouter = require('./routes/brands');
const orderRouter = require('./routes/orders');
const likedSneakers = require('./routes/likedSneakers');
const bodyParser = require("body-parser");

const origin = "http://localhost:3000";

const app = express();
app.use(cors({ origin }));

//app.use(morgan("dev"));
app.use(express.json());
//app.use(cors({ origin: frontEndServer }));
app.use(bodyParser.urlencoded({ extended: false }));
//routes
app.use('/', indexRouter);
app.use('/sneakers', sneakerRouter);
app.use("/users", userRouter);
app.use("/brands", brandRouter);
app.use("/orders", orderRouter);
app.use("/liked-sneakers", likedSneakers);


// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
