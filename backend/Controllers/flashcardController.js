const FlashcardSet = require("../Models/flashcardModel");
// Get a single flashcard set
const getFlashcard = async (req, res) => {
  const id = req.params.id;
  const flashcard = await FlashcardSet.findOne({ _id: id });
  res.status(200).json(flashcard);
};
// Get all flashcard sets
const getFlashcards = async (req, res) => {
  const flashcard = await FlashcardSet.find({});
  res.status(200).json(flashcard);
};
// Create a flashcard
const createFlashcard = async (req, res) => {
  const {
    name,
    flashcards: { front, back },
  } = req.body;
  const flashcard = await FlashcardSet.create({
    name,
    flashcards: { front, back },
  });
  res.status(200).json(flashcard);
};
// Update a flashcard
const updateFlashcard = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    flashcards: { front, back },
  } = req.body;
  const flashcard = await FlashcardSet.findByIdAndUpdate(id, {
    name: name,
    flashcards: {
      front: front,
      back: back,
    },
  });
  res.status(200).json(flashcard);
};
// Delete a flashcard
const deleteFlashcard = async (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    res.status(400).json({ mssg: "error deleting flashcard" });
  }
  const flashcard = await FlashcardSet.findByIdAndDelete(id);
  res.status(200).json(flashcard);
};
module.exports = {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
