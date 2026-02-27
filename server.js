require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", require("./routes/books"));
mongoose.connect(process.env.MONGO_URI)

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on 5000"));