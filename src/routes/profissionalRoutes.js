import express from 'express';
import { listarProfissionais,
         criarProfissional,
        buscarProfissionalPorId,
        atualizarProfissional
 } from '../controllers/profissionalController.js';

const router = express.Router();

router.get('/profissionais', listarProfissionais);
router.post('/profissionais', criarProfissional);
router.get('/profissionais/:id', buscarProfissionalPorId);
router.put('/profissionais/:id', atualizarProfissional);


export default router;