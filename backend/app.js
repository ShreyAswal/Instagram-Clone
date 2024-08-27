const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
const authorizeUser = require("./middlewares/authorizeUser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

// Test API
app.get("/test", authorizeUser, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

sequelize
  .sync()
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.error(`Error syncing database:`, error);
  });

PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
