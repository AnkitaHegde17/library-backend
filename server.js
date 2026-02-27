require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", require("./routes/books"));
mongoose.connect("mongodb+srv://ankita_hegde:ankita_hegde@mywebapp.kvexlxx.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on 5000"));