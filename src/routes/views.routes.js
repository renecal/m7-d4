import { Router } from "express";
import { viewHome, viewUsuarios } from "../controllers/views.controllers.js";
const router = Router();

router.get(["/", "/home"], viewHome);
router.get("/usuarios", viewUsuarios);

export default router;
