import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";

const PerfilModel = sequelize.define(
  "Perfil",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      references: {
        model: "usuario",
        key: "id"
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [0, 500],
          msg: "A bio deve ter no máximo 500 caracteres!"
        }
      }
    },
    site_pessoal: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: "O site pessoal deve ser uma URL válida!"
        }
      }
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isBeforeToday(value) {
          if (value && new Date(value) > new Date()) {
            throw new Error("A data de nascimento não pode ser depois de hoje!");
          }
        }
      }
    },
  },

  {
    tableName: "perfil",
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
  }
);

export default PerfilModel;
