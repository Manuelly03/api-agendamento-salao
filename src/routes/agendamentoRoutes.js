import express from 'express';
import { 
    listarAgendamentos,
    criarAgendamento
} from '../controllers/agendamentoController.js';

const router = express.Router();

router.get('/agendamentos', listarAgendamentos);
router.post('/agendamentos', criarAgendamento);

export default router;