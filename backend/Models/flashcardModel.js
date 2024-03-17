const mongoose = require("mongoose");
const { Schema } = mongoose;

const flashcardSchema = new Schema({
  front: String,
  back: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
module.exports = Flashcard;
