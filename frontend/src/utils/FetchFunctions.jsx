// Helper function that converts the formData object into JSON format
// with the same layout as the Schema specified in flashcardModel.js
function convertToSchema(formData) {
  const flashcards = [];
  const frontValues = formData.getAll("front");
  const backValues = formData.getAll("back");
  for (let i = 0; i < frontValues.length; i++) {
    flashcards.push({ front: frontValues[i], back: backValues[i] });
  }
  const dataToBeSent = { name: formData.get("name"), flashcards: flashcards };
  return JSON.stringify(dataToBeSent);
}
// Gets all sets of flashcards and returns data in a promise
export async function getCardSets() {
  try {
    const response = await fetch("http://localhost:5000/flashcards");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
// Gets a single set of flashcards and returns data inside of a promise
export async function getCardSet(cardKey) {
  try {
    const response = await fetch(`http://localhost:5000/flashcards/${cardKey}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
// Creates a new flashcard set
export async function postCard(formData) {
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
export async function patchCard(formData, cardKey) {
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
export async function deleteCards(cardKey) {
  const response = await fetch(`http://localhost:5000/flashcards/${cardKey}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
