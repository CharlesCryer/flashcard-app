const express = require("express");
const Router = express.Router();
const flashcardController = require("../Controllers/flashcardController");

Router.get("/:id", flashcardController.getFlashcard);
Router.get("/", flashcardController.getFlashcards);
Router.post("/", flashcardController.createFlashcard);
Router.patch("/:id", flashcardController.updateFlashcard);
Router.delete("/:id", flashcardController.deleteFlashcard);

module.exports = Router;
