const mongoose = require("mongoose");
const { Schema } = mongoose;

const flashcardSchema = new Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
});

const flashcardSetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  flashcards: [flashcardSchema],
});
const FlashcardSet = mongoose.model("FlashcardSet", flashcardSetSchema);
module.exports = FlashcardSet;
