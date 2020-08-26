require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./startup/routes")(app);

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

app.listen(
  process.env.PORT,
  console.log(`Listening on PORT ${process.env.PORT}...`)
);
