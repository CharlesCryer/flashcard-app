import { Schema, model } from "mongoose";

export interface userType {
  name: string;
  password: string;
}

const userSchema = new Schema<userType>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("User", userSchema);
