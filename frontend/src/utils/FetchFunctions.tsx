import { requestBody } from "./types";

// Helper function that converts the formData object into JSON format
// with the same layout as the Schema specified in flashcardModel.js
function convertToSchema(formData: FormData) {
  const flashcards = [];
  const frontValues = formData.getAll("front");
  const backValues = formData.getAll("back");
  for (let i = 0; i < frontValues.length; i++) {
    flashcards.push({ front: frontValues[i], back: backValues[i] });
  }
  const dataToBeSent: requestBody = {
    name: formData.get("name") as string,
    flashcards: flashcards,
  };
  return JSON.stringify(dataToBeSent);
}
// Gets all sets of flashcards and returns data in a promise
export async function getCardSets() {
  try {
    console.log("Getting all flashcards...");
    const response = await fetch("http://localhost:5000/flashcards");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
// Gets a single set of flashcards and returns data inside of a promise
export async function getCardSet(cardKey: string) {
  try {
    console.log("Getting flashcard set...");
    const response = await fetch(`http://localhost:5000/flashcards/${cardKey}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
// Creates a new flashcard set
export async function postCard(formData: FormData) {
  await fetch("http://localhost:5000/flashcards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: convertToSchema(formData),
  })
    .then(() => {
      console.log("Set added");
    })
    .catch((err) => {
      console.log(err);
    });
}
// Updates a flashcard set
export async function patchCard(formData: FormData, cardKey: string) {
  await fetch(`http://localhost:5000/flashcards/${cardKey}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: convertToSchema(formData),
  })
    .then(() => {
      console.log("Set updated");
    })
    .catch((err) => {
      console.log(err);
    });
}
// Deletes a flashcard set
export async function deleteCards(cardKey: string) {
  const response = await fetch(`http://localhost:5000/flashcards/${cardKey}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("Set deleted");
  return data;
}
