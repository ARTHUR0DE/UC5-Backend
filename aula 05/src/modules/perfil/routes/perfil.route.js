import express from "express";
import PerfilController from "../controllers/perfil.controller.js";

const router = express.Router();

// Criar perfil, listar todos e deletar todos (se desejar adicionar deletar todos)
// POST /perfis
router.post("/perfis", PerfilController.criar);
// GET /perfis
router.get("/perfis", PerfilController.listarTodos);

// Contar total de perfis
// GET /perfis/total
router.get("/perfis/total", PerfilController.totalPerfis);

// Listar, atualizar e deletar perfil por ID
// GET /perfis/:id
router.get("/perfis/:id", PerfilController.listarPorId);
// PATCH /perfis/:id
router.patch("/perfis/:id", PerfilController.atualizar);
// DELETE /perfis/:id
router.delete("/perfis/:id", PerfilController.deletarPorId);

export default router;
