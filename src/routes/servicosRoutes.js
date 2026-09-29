import express from 'express';
import {
     listarServicos,
     criarServico,
    buscarServicoPorId,
    atualizarServico
} from '../controllers/servicoController.js';

const router = express.Router();

router.get('/servicos', listarServicos);
router.post('/servicos', criarServico);
router.get('/servicos/:id', buscarServicoPorId);
router.put('/servicos/:id', atualizarServico);
export default router;