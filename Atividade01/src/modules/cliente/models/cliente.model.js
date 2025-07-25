import client from "../../../config/database.js"


export default class ClienteModel {
    static async cadastrar(nome, email, telefone, endereco) {
        const dados = [nome, email, telefone, endereco]
        const consulta = `insert into clientes(nome, email, telefone, endereco) values($1, $2, $3, $4) returning *`;
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async editar(id_cliente, nome, email, telefone, endereco) {
        const dados = [id_cliente, nome, email, telefone, endereco]
        const consulta = `update clientes set nome = coalesce($2, nome), email = coalese($3, email), telefone = coalese($4, telefone), endereco = coalese($5, endereco) where id_cliente = $1 returning *`;
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async listarTodos() {
        const consulta = `select * from clientes`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async listarPorId(id_cliente) {
        const dados = [id_cliente]
        const consulta = `select * from clientes where id_cliente = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }


    static async deletarTodos() {
        const consulta = `delete from clientes returning *`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async deletarPorId(id_cliente) {
        const dados = [id_cliente]
        const consulta = `delete from clientes where id_cliente = $1 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
}

