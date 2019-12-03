const express = require("express");
require("dotenv").config();

const dbConnect = require("./services/sales/api/db");

// import routes
const AuthRoute = require("./services/sales/api/routes/AuthRoutes");

const PostsRoute = require("./services/sales/api/routes/PostsRoute");

const LeadsRoute = require("./services/sales/api/routes/LeadRoutes");

// initialise the app express with app
const app = express();

// connect db
dbConnect();

// middleware
app.use(express.json());
// use route middleware
app.use("/api/auth", AuthRoute);
app.use("/api/sales", PostsRoute);
app.use("/api/leads", LeadsRoute);

// init the server
app.listen(5000, () => console.log("Server is running"));
