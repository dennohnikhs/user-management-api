const express = require("express");
const v1Routes = require("./src/v1/main.routes");
const userRoutes = require("./src/v1/user.routes");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 4000;


// const limiter = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   limit: 20, // Limit each IP to 100 requests per `window` (here, per 1 minutes).
// });
// //apply the compression middleware to decrease the amount of downloadable data hence improve performance.
// app.use(compression);
// // Apply the rate limiting middleware to all requests.
// app.use(limiter);
//If you want to restrict the origins that are allowed to access your server only identify them inside the object as follows
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());

app.use(express.json({ limit: '100mb' }));
// //secure our api with helmet package
// app.use(helmet);
// app.use("/api", v1Routes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
