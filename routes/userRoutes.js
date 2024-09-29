import express from "express";
import { getOtherUsers, login, logout, register, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(getOtherUsers);
router.route("/:userId").put(updateUser);
router.route("/:userId").delete(deleteUser);

export default router;