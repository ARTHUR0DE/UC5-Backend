import express from "express"
import dotenv from "dotenv"
import routeUsuario  from "./src/modules/usuario/routes/usuario.route.js"
import routePerfil from "./src/modules/perfil/routes/perfil.route.js"
import routerEndereco from "./src/modules/endereco/routes/endereco.route.js"
import "./src/config/database.js"

dotenv.config()

const app = express()
const port = process.env.PORTA

app.use(express.json())
app.use('/api', routeUsuario)
app.use('/api', routePerfil)
app.use('/api', routerEndereco)
app.listen(port, () => {
    try {
        console.log(`Servidor rodando na porta ${port}`)
    } catch (error) {
        console.log("Erro ao subir server:",error.message)
    }
})