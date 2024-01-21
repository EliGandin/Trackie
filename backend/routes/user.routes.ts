import { Router } from "express";
import { insertUser } from "../repositories/user.repository";

const router = Router();

// router.get("/profile", getProfile) //TODO:

router.post("/signup", insertUser);
