const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", require("./routes/books"));
mongoose.connect("mongodb://127.0.0.1:27017/library");

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on 5000"));