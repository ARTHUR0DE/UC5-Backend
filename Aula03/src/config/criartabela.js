// import client from "../../../Atividade01/src/config/database.js";

// class Createtable {
//     static async produto() {
//         const consulta = `
//             CREATE TABLE IF NOT EXISTS produto (
//                 id SERIAL PRIMARY KEY,
//                 nome VARCHAR(100) NOT NULL,
//                 preco NUMERIC(10,2) NOT NULL,
//                 descricao TEXT NOT NULL
//             );
//         `;
//         try {
//             await client.query(consulta);
//             console.log("Tabela 'produto' criada com sucesso.");
//         } catch (erro) {
//             console.error("Erro ao criar tabela 'produto':", erro);
//         }
//     }
// }

// ProdutoModel.produto();

// export default ProdutoModel;