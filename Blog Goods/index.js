import express from 'express';
import routeUser from "./src/modules/user/routes/user.route.js";
import routePerfil from "./src/modules/perfil/routes/perfil.route.js";
import dotenv from 'dotenv';

import './src/config/database.js';

dotenv.config()

const app = express();
const port = process.env.PORTA

app.use(express.json());
app.use(routeUser);
app.use(routePerfil);

app.listen(port, async () => {
    try {
        console.log(`Servidor rodando na porta ${port}`);
    } catch (error) {
        console.log('Erro ao abrir o servidor', error = error.message)
    }
});