import { Router } from "express";
const router: Router = Router();
import {
  checkUserValid,
  updateUser,
  deleteUser,
  createUser,
} from "../Controllers/loginController";

router.post("/", createUser);

router.post("/:id", checkUserValid);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
