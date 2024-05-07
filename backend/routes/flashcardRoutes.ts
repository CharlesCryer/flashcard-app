import { Router } from "express";
const router: Router = Router();
import {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from "../Controllers/flashcardController";

// Get a single flashcard
router.get("/:id", getFlashcard);
// Get all flashcards
router.get("/", getFlashcards);
// Create a flashcard set
router.post("/", createFlashcard);
// Update a flashcard set
router.patch("/:id", updateFlashcard);
// Delete a flashcard set
router.delete("/:id", deleteFlashcard);

export default router;
