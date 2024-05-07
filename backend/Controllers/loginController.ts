import { User, userType } from "../Models/userModel";
import { Request, Response } from "express";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, password }: userType = req.body;
    const newUser: userType = await User.create({
      name: name,
      password: password,
    });
    res.status(200).json(newUser);
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const { name, password }: userType = req.body;
    const updatedUser: userType | null = await User.findByIdAndUpdate(id, {
      name: name,
      password: password,
    });
    if (!updatedUser) {
      res.status(400).json({ err: "error, user to be updated is null" });
      console.log("Error, user to be updated is null");
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const deletedUser: userType | null = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(400).json({ err: "User to be deleted cannot be null" });
      console.log("ERROR, user to be deleted cannot be null");
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};

export const checkUserValid = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, password }: userType = req.body;
    const user: userType | null = await User.findOne({ name: name });
    if (!user) {
      res.status(400).json({ err: "Name does not exists" });
    } else if (name == user.name && password == user.password) {
      res.status(200).json({ mssg: "success" });
    } else {
      res.status(400).json({ err: "Password incorrect" });
    }
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};
