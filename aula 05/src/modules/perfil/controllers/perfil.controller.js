import PerfilModel from "../models/perfil.model.js";
import UsuarioModel from "../../usuario/models/usuario.model.js";

class PerfilController {
  // Criar perfil
  static async criar(req, res) {
    try {
      const { user_id, bio, site_pessoal, data_nascimento } = req.body;
      if (!user_id) {
        return res.status(400).json({ mensagem: "user_id(id do usuario) é obrigatório!" });
      }
      // Verifica se o usuário existe
      const usuario = await UsuarioModel.findByPk(user_id);
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado!" });
      }
      // Cria o perfil
      const perfil = await PerfilModel.create({ user_id, bio, site_pessoal, data_nascimento });
      res.status(201).json({ mensagem: "Perfil criado com sucesso!", perfil });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Listar todos os perfis
  static async listarTodos(req, res) {
    try {
      const perfis = await PerfilModel.findAll();
      if (!perfis || perfis.length === 0) {
        return res.status(200).json({ mensagem: "Nenhum perfil encontrado!" });
      }
      res.status(200).json(perfis);
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Listar perfil por ID
  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const perfil = await PerfilModel.findByPk(id);
      if (!perfil) {
        return res.status(404).json({ mensagem: "Perfil não encontrado!" });
      }
      res.status(200).json(perfil);
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Atualizar perfil por ID
  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { bio, site_pessoal, data_nascimento } = req.body;
      const resultado = await PerfilModel.update(
        { bio, site_pessoal, data_nascimento },
        { where: { id } }
      );
      if (!resultado === 0) {
        return res.status(404).json({ mensagem: "Perfil não encontrado!" });
      }
      res.status(200).json({ mensagem: "Perfil atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Deletar perfil por ID
  static async deletarPorId(req, res) {
    try {
      const { id } = req.params;
      const resultado = await PerfilModel.destroy({ where: { id } });
      if (!resultado) {
        return res.status(404).json({ mensagem: "Perfil não encontrado!" });
      }
      res.status(200).json({ mensagem: "Perfil excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }

  // Contar total de perfis
  static async totalPerfis(req, res) {
    try {
      const total = await PerfilModel.count();
      res.status(200).json({ total });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor.", erro: error.message });
    }
  }
}

export default PerfilController;
