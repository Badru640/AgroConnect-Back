const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectedDB = require("./database/database");
const cors = require("cors");

const productRoutes = require("./Routes/productRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 8000;

app.listen(3035, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
