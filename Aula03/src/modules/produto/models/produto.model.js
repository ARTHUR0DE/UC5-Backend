import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";

const ProdutoModel = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          args: [2, 100],
          msg: 'O nome deve ter no minimo 2 caracteres e no máximo 100!'
        },
        notEmpty:{
          msg:'O campo nome deve ser preenchido!'
        },
        is:{
          args:/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/,
          msg: 'O nome não deve conter caracteres especiais!'
        }
      }
    },
    preco: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      validate:{
        isDecimal:{
          msg: 'O preço do produto deve ser no formato (valor . casa decimal). Exemplo: 12.23!'
        },
        isNumeric:{
          msg: 'O campo preço deve ser um número!'
        },
        isMenor(value) {
        if (value === null && value <= 0) {
          throw new Error('O preço do produto não pode ser menor igual a zero!');
        }
      }
      }
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        len:{
          args: [20,50],
          msg:'A descrição deve ter no minimo 20 caracteres e no máximo 50!'
        }
      }
    },
  },
  {
    tableName:'produto',
    createdAt:'criado_em',
    updatedAt:'atualizado_em'
  }
);

export default ProdutoModel
