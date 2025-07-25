import express from 'express'
import ProdutoController from '../controllers/produto.controller.js'
const router = express.Router()

// Listar todos os produtos
router.get("/produtos", ProdutoController.listarTodos)

// Listar produtos por id
router.get("/produtos/:id", ProdutoController.listarPorId)

// Cadastrar um Produto
router.post("/produtos/cadastrar", ProdutoController.cadastrar)

// Atualizar um produto
router.patch("/produtos/atualizar/:id", ProdutoController.atualizar)

// Deletar produto por id
router.delete("/produtos/deletar/:id", ProdutoController.deletarPorId)

// Deletar todos os produtos
router.delete("/produtos/deletar", ProdutoController.deletarTodos)

export default router