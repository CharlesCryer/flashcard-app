const Models = require("../Models/flashcardModel");
// Get a single flashcard set
const getFlashcard = async (req, res) => {
  const id = req.params.id;
  const flashcardSet = await Models.FlashcardSet.findOne({ _id: id });
  res.status(200).json(flashcardSet);
};
// Get all flashcard sets
const getFlashcards = async (req, res) => {
  const flashcardSet = await Models.FlashcardSet.find({});
  res.status(200).json(flashcardSet);
};
// Create a flashcard set
const createFlashcard = async (req, res) => {
  const { name, flashcards: flashcards } = req.body;
  console.log(flashcards);
  console.log("hello");
  const flashcard = await Models.FlashcardSet.create({
    name,
    flashcards: flashcards,
  });
  res.status(200).json(flashcard);
};
// Update a flashcard set
const updateFlashcard = async (req, res) => {
  const id = req.params.id;
  const { name, flashcards: flashcards } = req.body;
  const flashcard = await Models.FlashcardSet.findByIdAndUpdate(id, {
    name: name,
    flashcards: flashcards,
  });
  res.status(200).json(flashcard);
};
// Delete a flashcard set
const deleteFlashcard = async (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    res.status(400).json({ mssg: "error deleting flashcard" });
  }
  const flashcard = await Models.FlashcardSet.findByIdAndDelete(id);
  res.status(200).json(flashcard);
};
module.exports = {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
