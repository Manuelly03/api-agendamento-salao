import express from  'express';
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Agendamento para Salão de Beleza'
    });
});
export default app;