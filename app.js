const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const products = require("./data/products");
const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS WORKING......");
});

//ROUTERS
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// PAYPAL
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//making upload folder static, a route to serve static files from the uploads directory.

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dej-market/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "dej-market", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
