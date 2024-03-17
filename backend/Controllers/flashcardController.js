const mongoose = require("mongoose");
const Flashcard = require("../Models/flashcardModel");
// Get a single flashcard
const getFlashcard = async (req, res) => {
  const id = req.params.id;
  const flashcard = await Flashcard.findOne({ _id: id });
  res.status(200).json(flashcard);
};
// Get all flashcards
const getFlashcards = async (req, res) => {
  const flashcard = await Flashcard.find({});
  res.status(200).json(flashcard);
};
// Create a flashcard
const createFlashcard = async (req, res) => {
  const { front, back } = req.body;
  const flashcard = await Flashcard.create({ front, back });
  res.status(200).json(flashcard);
};
// Update a flashcard
const updateFlashcard = async (req, res) => {
  const id = req.params.id;
  const { front, back } = req.body;
  const flashcard = await Flashcard.findByIdAndUpdate(id, {
    front: front,
    back: back,
  });
  res.status(200).json(flashcard);
};
// Delete a flashcard
const deleteFlashcard = async (req, res) => {
  const id = req.params.id;
  const flashcard = await Flashcard.findByIdAndDelete(id);
  res.status(200).json(flashcard);
};
module.exports = {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
