require("dotenv").config();

const cors = require("cors");
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 5000;
const models = require("./models/models");
const app = express();
const router = require("./routes/routes");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(fileUpload({}));

//error check
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
