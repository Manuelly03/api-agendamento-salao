# API de Agendamento para Salão de Beleza
API REST desenvolvida em JavaScript com Express.js para realizar o gerenciamento de agendamentos de um salão de beleza.

## Integrantes
- Manuelly Fernandes
- Dheroly

## Tecnologias utilizadas
- JavaScript
- Node.js
- Express.js
- Git
- GitHub

## Como executar o projeto
Primeiro, instale as dependências:
```bash
npm install

O servidor será iniciado em:
http://localhost:3000

Recursos da API
A API possui quatro recursos principais:

-Clientes
-Profissionais
-Serviços
-Agendamentos

## Endpoints
### Clientes

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/:id` | Busca um cliente pelo ID |
| POST | `/clientes` | Cadastra um cliente |
| PUT | `/clientes/:id` | Atualiza um cliente |
| DELETE | `/clientes/:id` | Exclui um cliente |

### Profissionais
| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/profissionais` | Lista todos os profissionais |
| GET | `/profissionais/:id` | Busca um profissional pelo ID |
| POST | `/profissionais` | Cadastra um profissional |
| PUT | `/profissionais/:id` | Atualiza um profissional |
| DELETE | `/profissionais/:id` | Exclui um profissional |