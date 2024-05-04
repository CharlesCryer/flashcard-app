export interface cards {
  name: string;
  flashcards: Array<{ front: string; back: string }>;
  _id: string;
  _v: string;
}
export interface requestBody {
  name: FormDataEntryValue;
  flashcards: Array<{ front: FormDataEntryValue; back: FormDataEntryValue }>;
}
