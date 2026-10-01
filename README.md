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

### Serviços
| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/servicos` | Lista todos os serviços |
| GET | `/servicos/:id` | Busca um serviço pelo ID |
| POST | `/servicos` | Cadastra um serviço |
| PUT | `/servicos/:id` | Atualiza um serviço |
| DELETE | `/servicos/:id` | Exclui um serviço |

### Agendamentos
| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/agendamentos` | Lista todos os agendamentos |
| GET | `/agendamentos/:id` | Busca um agendamento pelo ID |
| POST | `/agendamentos` | Cria um agendamento |
| PUT | `/agendamentos/:id` | Atualiza um agendamento |
| DELETE | `/agendamentos/:id` | Exclui um agendamento |

## Exemplos de requisições
### Criar cliente

```json
{
  "nome": "Maria Silva",
  "telefone": "67999999999",
  "email": "maria@email.com"
}

Criar profissional
{
  "nome": "Ana Souza",
  "especialidade": "Cabeleireira"
}

Criar serviço
{
  "nome": "Corte Feminino",
    "duracaoMinutos": 60,
"preco": 80
}

Criar agendamento
{
  "clienteId": 1,
   "profissionalId": 1,
     "servicoId": 1,
 "inicio": "2026-09-30T14:00:00-04:00"
}

