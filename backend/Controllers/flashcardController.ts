import { FlashcardSet, FlashcardSetType } from "../Models/flashcardModel";
import { Request, Response } from "express";

// Get a single flashcard set
export const getFlashcard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const flashcardSet: FlashcardSetType | null = await FlashcardSet.findOne({
      _id: id,
    });
    if (!flashcardSet) {
      res.status(404).json({ err: "not found" });
    } else {
      res.status(200).json(flashcardSet);
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(400).json({ err: err });
  }
};
// Get all flashcard sets
export const getFlashcards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const flashcardSet: FlashcardSetType[] = await FlashcardSet.find({});
    res.status(200).json(flashcardSet);
  } catch (err: unknown) {
    console.log(err);
    res.status(400).json({ err: err });
  }
};
// Create a flashcard set
export const createFlashcard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, flashcards: flashcards }: FlashcardSetType = req.body;
    const flashcard: FlashcardSetType = await FlashcardSet.create({
      name,
      flashcards: flashcards,
    });
    res.status(200).json(flashcard);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
};
// Update a flashcard set
export const updateFlashcard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const { name, flashcards: flashcards }: FlashcardSetType = req.body;
    const flashcard: FlashcardSetType | null =
      await FlashcardSet.findByIdAndUpdate(id, {
        name: name,
        flashcards: flashcards,
      });
    if (!flashcard) {
      console.log("ERROR: Set to be updated is null");
      res.status(400).json({ err: "Set to be updated is null" });
    } else {
      res.status(200).json(flashcard);
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(400).json({ err: err });
  }
};
// Delete a flashcard set
export const deleteFlashcard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const flashcard: FlashcardSetType | null =
      await FlashcardSet.findByIdAndDelete(id);
    if (!flashcard) {
      res.status(400).json({ err: "Flashcard set to be deleted is null" });
    } else {
      res.status(200).json(flashcard);
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(400).json({ err: err });
  }
};
