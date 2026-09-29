import express from 'express';
import { 
    listarAgendamentos

} from '../controllers/agendamentoController.js';

const router = express.Router();

router.get('/agendamentos', listarAgendamentos);

export default router;