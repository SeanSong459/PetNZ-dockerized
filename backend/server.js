const express = require("express");
const colors = require("colors");

const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/user");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/products/puppy", require("./routes/productRoutes"));
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
