import express from 'express';
import {
     listarServicos,
     criarServico,
    buscarServicoPorId
} from '../controllers/servicoController.js';

const router = express.Router();

router.get('/servicos', listarServicos);
router.post('/servicos', criarServico);
router.get('/servicos/:id', buscarServicoPorId);

export default router;