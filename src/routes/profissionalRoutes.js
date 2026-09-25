import express from 'express';
import { listarProfissionais,
         criarProfissional
 } from '../controllers/profissionalController.js';

const router = express.Router();

router.get('/profissionais', listarProfissionais);
router.post('/profissionais', criarProfissional);


export default router;