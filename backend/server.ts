//Dependencies
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express, { Request, Response } from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

//Middleware
app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next) => {
  console.log(req.method, req.path);
  next();
});

//Routes
import flashcardRouter from "./routes/flashcardRoutes";
app.use("/flashcards", flashcardRouter);
import loginRouter from "./routes/loginRoutes";
app.use("/login", loginRouter);

// Connecting to DB and listening on PORT
const PORT = process.env.PORT || 3000;
async function Main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB environemnt variable is undefined");
  }
  await mongoose.connect(process.env.MONGODB_URI);
}

Main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
