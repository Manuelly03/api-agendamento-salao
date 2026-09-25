import express from 'express';
import { listarProfissionais,
         criarProfissional,
        buscarProfissionalPorId,
        atualizarProfissional,
        excluirProfissional
 } from '../controllers/profissionalController.js';

const router = express.Router();

router.get('/profissionais', listarProfissionais);
router.post('/profissionais', criarProfissional);
router.get('/profissionais/:id', buscarProfissionalPorId);
router.put('/profissionais/:id', atualizarProfissional);
router.delete('/profissionais/:id', excluirProfissional);   

export default router;