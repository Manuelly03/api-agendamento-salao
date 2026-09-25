import express from 'express';
import { listarProfissionais,
         criarProfissional,
        buscarProfissionalPorId

 } from '../controllers/profissionalController.js';

const router = express.Router();

router.get('/profissionais', listarProfissionais);
router.post('/profissionais', criarProfissional);
router.get('/profissionais/:id', buscarProfissionalPorId);

export default router;