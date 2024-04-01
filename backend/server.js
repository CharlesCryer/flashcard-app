//Dependencies
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//Routes
const flashcardRouter = require("./routes/flashcardRoutes");
//Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/flashcards", flashcardRouter);

// Connecting to DB and listening on PORT
const PORT = process.env.PORT || 3000;
async function Main() {
  await mongoose.connect(process.env.MONGODB_URI);
}
Main()
  .then(
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
