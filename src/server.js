import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js'
import profissionalRoutes from './routes/profissionalRoutes.js'
import servicosRoutes from './routes/servicosRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js'
const app = express();
app.use(express.json());
app.use(clienteRoutes);
app.use(profissionalRoutes);
app.use(servicosRoutes);
app.use(agendamentoRoutes);

app.get('/', (req, res) => {
        res.json({
mensagem: 'API de Agendamento para Salão de Beleza'
    });
});
const PORT = 3000;

app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);

});


