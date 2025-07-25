import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";

const ProdutoModel = sequelize.define(
  "Usuario",
  {
    id_: {
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

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{}
      },

    foto_perfil: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    
    
    },


  {
    tableName:'usuario',
    createdAt:'criado_em',
    updatedAt:'atualizado_em'
  }
);

export default ProdutoModel
