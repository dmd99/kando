const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/router");
const cors = require("cors");

const uri = "mongodb+srv://kandoman:kandoman@cluster0.i0dl9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

dotenv.config();
//mongoose.connect(process.env.DATABASE_ACCESS, { useUnifiedTopology: true });

app.use(express.json());
app.use(cors());
app.use("/app", routeUrls);
app.listen(4000, () => console.log("server running"));
