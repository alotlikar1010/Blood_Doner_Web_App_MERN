const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
//dot config
dotenv.config();

connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
//port
const PORT =   8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In Aniket ModeOn Port ${PORT}`
      .bgBlue.white
  );
});