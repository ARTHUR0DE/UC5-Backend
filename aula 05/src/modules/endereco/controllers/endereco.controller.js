import axios from "axios";
import EnderecoModel from "../models/endereco.model.js";

class EnderecoController {
  // Cadastrar endereço
  static async cadastrar(req, res) {
    try {
      const { user_id, cep, numero } = req.body;
      if (!user_id || !cep || !numero) {
        return res
          .status(400)
          .json({ mensagem: "ID do usuário, cep e número são obrigatórios!" });
      }

      const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if(resposta.data.erro){
        return resposta.status(400).json({msg:'Erro, cep invalido!'})
      }
      const dados = {
        user_id,
        cep,
        numero,
        rua: resposta.data.logradouro,
        estado: resposta.data.uf,
        cidade: resposta.data.localidade,
        bairro: resposta.data.bairro
      };

      const enderecoCriado = await EnderecoModel.create(dados);
      res.status(201).json(enderecoCriado);
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Listar todos os endereços
  static async listarTodos(req, res) {
    try {
      const enderecos = await EnderecoModel.findAll();
      if (!enderecos || enderecos.length === 0) {
        return res.status(200).json({ mensagem: "Banco de dados vazio!" });
      }
      res.status(200).json(enderecos);
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Listar endereço por ID
  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const endereco = await EnderecoModel.findByPk(id);
      if (!endereco) {
        return res.status(404).json({ mensagem: "Endereço não encontrado!" });
      }
      res.status(200).json(endereco);
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Atualizar endereço por ID
  static async atualizar(req, res) {
    try {
      const { cep, numero } = req.body;
      const { id } = req.params;

      let dadosAtualizados = {};
      if (cep) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (resposta.data.erro) {
          return res.status(400).json({ mensagem: "CEP inválido!" });
        }
        dadosAtualizados = {
          cep,
          rua: resposta.data.logradouro,
          estado: resposta.data.uf,
          cidade: resposta.data.localidade,
          bairro: resposta.data.bairro
        };
      }
      if (numero) dadosAtualizados.numero = numero;

      const resultado = await EnderecoModel.update(dadosAtualizados, { where: { id } });
      if (resultado[0] === 0) {
        return res.status(404).json({ mensagem: "Endereço não encontrado!" });
      }
      res.status(200).json({ mensagem: "Endereço atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Deletar endereço por ID
  static async deletarPorId(req, res) {
    try {
      const { id } = req.params;
      const resultado = await EnderecoModel.destroy({ where: { id } });
      if (!resultado) {
        return res.status(404).json({ mensagem: "Endereço não encontrado!" });
      }
      res.status(200).json({ mensagem: "Endereço excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Deletar todos os endereços
  static async deletarTodos(req, res) {
    try {
      await EnderecoModel.destroy({ truncate: true });
      res.status(200).json({ mensagem: "Todos os endereços foram deletados!" });
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Contar total de endereços
  static async totalEnderecos(req, res) {
    try {
      const total = await EnderecoModel.count();
      res.status(200).json({ total });
    } catch (error) {
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }
}

export default EnderecoController;
