import { Router } from "express";
import { signUpUser } from "../controllers/user.controller";

const router = Router();

// router.get("/profile", getProfile) //TODO:

router.post("/signup", signUpUser);

router.post("/login");

export default router;
