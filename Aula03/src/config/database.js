import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false
  }
);
 
async function sincronizar(){
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  await sequelize.sync({ froce: false, alter: false});
  console.log("Tabela produtpo criada com sucesso");
} catch (error) {
  console.error("Unable to connect to the database:", error.message);
}
}

sincronizar()
export default sequelize;
