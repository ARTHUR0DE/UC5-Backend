import ClienteModel from "../models/cliente.model"

export default class ClienteController {
    static async cadastrar(req, res) {
        try {
            const { nome, email, telefone, endereco } = req.body
            if (!nome || !email || !telefone || !endereco) {
                return res.status(400).json({
                    msg: "Todos os campos são obrigatórios"
                })
            }
            await ClienteModel.cadastrar({ nome, email, telefone, endereco })
            res.status(201).json({
                msg: "Cliente cadastrado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }

    static async editar(req, res) {
        try {
            const { nome, email, telefone, endereco } = req.body
            const id = parseInt(req.params.id)
            const cliente = await ClienteModel.editar(id, { nome, email, telefone, endereco })
            if (!cliente) {
                return res.status(404).json({
                    msg: "Cliente não encontrado!"
                })
            }
            res.status(200).json({
                msg: "Cliente atualizado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }

    static async listarTodos(req, res) {
        try {
            const clientes = await ClienteModel.listarTodos()
            if (clientes.length === 0)
                return res.status(404).json({
                    msg: "Banco de dados vazio!"
                })
            res.status(200).json(clientes)
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }

    static async listarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const cliente = await ClienteModel.listarPorId(id)
            if (!cliente) {
                return res.status(404).json({
                    msg: "Cliente não encontrado!"
                })
            }
            res.status(200).json(cliente)
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }

    static async deletarTodos(req, res) {
        try {
            await ClienteModel.deletarTodos()
            res.status(200).json({
                msg: "Todos os clientes foram deletados!"
            })
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }

    static async deletarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const cliente = await ClienteModel.deletarPorId(id)
            if (!cliente) {
                return res.status(404).json({
                    msg: "Cliente não encontrado!"
                })
            }
            res.status(200).json({
                msg: "Cliente deletado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                msg: "Erro interno do servidor! Tente novamente mais tarde",
                error: error.message
            })
        }
    }
}


