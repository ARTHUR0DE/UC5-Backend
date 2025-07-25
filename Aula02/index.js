// importação do express
const express = require("express");
//importação do dotenv
const dotenv = require("dotenv").config();
// nome da minha aplicação server
const app = express();
// porta
const port = process.env.PORTA;

app.use(express.json())
const produtos = [
  {"nome": "fulano de tal"}
];

// rota para listar todos os produtos
app.get("/produtos", (requisicao, resposta) => {
  try {
    const produto = produtos.map((produto) => produto);
    if (produto.length === 0) {
      return resposta.status(200).json({ mensagem: "Banco de dados Void" });
    }
    resposta.status(200).json(produtos);
  } catch (error) {
    resposta
      .status(500)
      .json({
        mensagem: "Erro interno do servidor, favor tentar novamente mais tarde!",
        erro: error.message
      });
  }
});

// criando um novo produtos
app.post("/produtos/cadastrar", (requisicao, resposta) => {
  try {
    const { id, nome, preco, descricao } = requisicao.body
    if(!id || !nome || !preco || !descricao){
      return resposta.status(400).json({mensagem: 'Todos os campos são obrigatórios'})
    }
    const novoProduto = { id, nome, preco, descricao }
    produtos.push(novoProduto)
    resposta.status(201).json({mensagem: 'Produto criado com sucesso!'})
  } catch (error) {
    resposta
      .status(500)
      .json({
        mensagem: "Erro interno do servidor, favor tentar novamente mais tarde!",
        erro: error.message
      });
  }
});

//atualizando um produto
app.patch("/produtos/atualizar/:id", (requisicao, resposta) => {
  try {
    const { novoNome, novoPreco, novaDescricao} = requisicao.body
    const id = parseInt(requisicao.params.id)
    const produto = produtos.find(produto => produto.id == id)
    if(!produto) {
      return resposta.status(404).json({mensagem: 'Produto não encontrado'})
    }

    produto.nome = novoNome || produto.nome
    produto.preco = novoPreco || produto.preco
    produto.descricao = novaDescricao || produto.descricao
    resposta.status(200).json({mensagem: 'Produto editado com sucesso!'})
  } catch (error) {
     resposta
      .status(500)
      .json({
        mensagem: "Erro interno do servidor, favor tentar novamente mais tarde!",
        erro: error.message
      });
  }
});

//listar produto por ID
app.get("/produtos/listar/:id", (requisicao, resposta) => {
  try {
    const id = parseInt(requisicao.params.id);
    const produto = produtos.find((produto) => produto.id === id);
    if (!produto) {
      return resposta.status(404).json({ mensagem: "Produto não encontrado!" });
    }
    resposta.status(200).json(produto);
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
      erro: error.message,
    });
  }
});

//deletar os produtos
app.get("/produtos/deletar", (requisicao, resposta) => {  try {
    produtos.length = 0;
    resposta
      .status(200)
      .json({ mensagem: "Todos os produtos foram deletados!" });
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
      erro: error.message,
    });
  }
});

// deletar produto por id
app.delete("/produtos/deletar/:id", (requisicao, resposta) => {
   try {
    const id = parseInt(requisicao.params.id)
    const index = produtos.findIndex(produto => produto.id === id)
    if (index === -1) {
      return resposta.status(404).json({ mensagem: "Produto não encontrado!" });
    }
    produtos.splice(index, 1)
    resposta.status(200).json({mensagem: 'Produto deletado com sucesso!'})
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
      erro: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
