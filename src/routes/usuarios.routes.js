import { Router } from "express";
import { getAllUsuarios } from '../controllers/usuarios.controllers.js';
const router = Router();

router.get("/", getAllUsuarios);


export default router;
