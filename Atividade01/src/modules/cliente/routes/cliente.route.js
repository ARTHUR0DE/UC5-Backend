import express from "express";
import ClienteController from "../controllers/cliente.controller";

const route = express.Router();


route.get("/cliente", ClienteController.listarTodos);

route.get("/cliente/:id", ClienteController.listarPorId);

route.post("/cliente/cadastrar", ClienteController.cadastrar);

route.patch("/cliente/atualizar/:id", ClienteController.editar);

route.delete("/cliente/deletar", ClienteController.deletarTodos);

route.delete("/cliente/deletar/:id", ClienteController.deletarPorId);


export default route;