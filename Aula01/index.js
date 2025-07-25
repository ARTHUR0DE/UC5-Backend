// importação do express
const express = require('express')
// nome da minha aplicação server
const app = express()
// porta
const port = 3010

//
app.get('/senac', (requisicao, resposta) => {
  resposta.send('Olá mundo, SENAC!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
