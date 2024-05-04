import express from "express";
const Router = express.Router();
import flashcardController from "../Controllers/flashcardController";

Router.get("/:id", flashcardController.getFlashcard);
Router.get("/", flashcardController.getFlashcards);
Router.post("/", flashcardController.createFlashcard);
Router.patch("/:id", flashcardController.updateFlashcard);
Router.delete("/:id", flashcardController.deleteFlashcard);

export default Router;
