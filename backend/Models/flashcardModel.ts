import { Schema, model } from "mongoose";

export interface FlashcardSetType {
  name: string;
  flashcards: Array<{ FlashcardType: FlashcardType }>;
}
export interface FlashcardType {
  front: string;
  back: string;
}

const flashcardSchema = new Schema<FlashcardType>({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
});

const flashcardSetSchema = new Schema<FlashcardSetType>({
  name: {
    type: String,
    required: true,
  },
  flashcards: [flashcardSchema],
});
export const FlashcardSet = model("FlashcardSet", flashcardSetSchema);
