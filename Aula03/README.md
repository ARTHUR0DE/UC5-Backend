# UC5-Backend – Sistema de Gerenciamento de Produtos e Clientes

Este projeto é uma aplicação backend desenvolvida em Node.js, organizada em módulos para facilitar o gerenciamento de produtos e clientes. O sistema está dividido em aulas, cada uma com sua própria estrutura de pastas, visando o aprendizado progressivo de conceitos de backend.

## Estrutura do Projeto

```
UC5-Backend/
│
├── Aula01/
│   ├── index.js
│   └── package.json
│
├── Aula02/
│   ├── index.js
│   ├── package.json
│   ├── docs/
│   │   └── convencoes.md
│   └── src/
│       ├── config/
│       │   └── database.js
│       └── modules/
│           ├── cliente/
│           │   ├── controllers/
│           │   │   └── cliente.controller.js
│           │   ├── models/
│           │   │   └── cliente.model.js
│           │   └── routes/
│           │       └── cliente.route.js
│           └── produto/
│               ├── controllers/
│               │   └── produto.controller.js
│               ├── models/
│               │   └── produto.model.js
│               └── routes/
│                   └── produto.route.js
│
├── aula 03/
│   ├── index.js
│   ├── package.json
│   ├── README.md
│   ├── docs/
│   │   └── convencoes.md
│   └── src/
│       ├── config/
│       │   └── database.js
│       └── modules/
│           └── produto/
│               ├── controllers/
│               │   └── produto.controller.js
│               ├── models/
│               │   └── produto.model.js
│               └── routes/
│                   └── produto.route.js
│
└── package.json
```

## Tecnologias Utilizadas
- **Node.js**
- **Express** (framework para criação de APIs)
- **Sequelize** (ORM para banco de dados relacional)
- **SQLite** (banco de dados local para fins didáticos)

## Como Executar o Projeto

1. **Pré-requisitos:**
   - Node.js instalado (versão 14 ou superior)
   - npm (gerenciador de pacotes do Node)

2. **Instalação das dependências:**
   - Acesse a pasta da aula desejada (ex: `cd "aula 03"`)
   - Execute o comando:
     ```
     npm install
     ```

3. **Execução do servidor:**
   - Ainda na pasta da aula, execute:
     ```
     node index.js
     ```
   - O servidor será iniciado e estará disponível em `http://localhost:3000` (ou porta definida no código).

## Organização dos Módulos

- **controllers/**: Lógica de controle das rotas, onde ficam as funções que processam as requisições e respostas.
- **models/**: Definição dos modelos de dados (ORM), representando as tabelas do banco de dados.
- **routes/**: Definição das rotas da API, conectando URLs aos controllers.
- **config/**: Configurações do banco de dados e outros parâmetros globais.
- **docs/**: Documentação e convenções do projeto.

## Exemplos de Rotas (Aula 03)

- **Produtos**
  - `GET /produtos` – Lista todos os produtos
  - `POST /produtos` – Cria um novo produto
  - `GET /produtos/:id` – Busca um produto pelo ID
  - `PUT /produtos/:id` – Atualiza um produto existente
  - `DELETE /produtos/:id` – Remove um produto

## Convenções de Código
Consulte o arquivo `docs/convencoes.md` para padrões de nomenclatura, organização e boas práticas adotadas no projeto.

## Contribuição
Este projeto é voltado para fins educacionais, mas sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Projeto desenvolvido para fins acadêmicos. Uso livre para estudo.
