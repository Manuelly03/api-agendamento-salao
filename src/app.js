import express from  'express';
import clienteRoutes from './routes/clienteRoutes.js';
import profissionalRoutes from './routes/profissionalRoutes.js';
const app = express();

app.use(express.json());
app.use(clienteRoutes);
app.use(profissionalRoutes);

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Agendamento para Salão de Beleza'
    });
});
export default app;