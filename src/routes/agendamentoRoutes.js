import express from 'express';
import { 
    listarAgendamentos,
    criarAgendamento,
    buscarAgendamentoPorId,
    atualizarAgendamento,
    excluirAgendamento,
    cancelarAgendamento
} from '../controllers/agendamentoController.js';

const router = express.Router();

router.get('/agendamentos', listarAgendamentos);
router.post('/agendamentos', criarAgendamento);
router.get('/agendamentos/:id', buscarAgendamentoPorId);
router.put('/agendamentos/:id', atualizarAgendamento);
router.delete('/agendamentos/:id', excluirAgendamento);
router.patch('/agendamentos/:id/cancelar', cancelarAgendamento);
export default router;