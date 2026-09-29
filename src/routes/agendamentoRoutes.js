import express from 'express';
import { 
    listarAgendamentos,
    criarAgendamento,
    buscarAgendamentoPorId,
    atualizarAgendamento
} from '../controllers/agendamentoController.js';

const router = express.Router();

router.get('/agendamentos', listarAgendamentos);
router.post('/agendamentos', criarAgendamento);
router.get('/agendamentos/:id', buscarAgendamentoPorId);
router.put('/agendamentos/:id', atualizarAgendamento);

export default router;