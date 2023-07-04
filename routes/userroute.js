import express from "express";
import { createUser, deleteUser, getAllUsers, getOneUser } from "../controllers/usercontroller.js";

const router = express.Router();

// To create user
router.post("/", createUser) 

// To get all users
router.get("/all", getAllUsers)

// To get a specific user
router.get("/one", getOneUser)

// To delete a Particular User
router.delete("/remove", deleteUser)

export default router;