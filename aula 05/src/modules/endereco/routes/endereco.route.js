import express from "express";
import EnderecoController from "../controllers/endereco.controller.js";
const router = express.Router();

router.post('/endereco', EnderecoController.cadastrar)
export default router;
