import express from 'express';
import { listarProfissionais } from '../controllers/profissionalController.js';

const router = express.Router();

router.get('/profissionais', listarProfissionais);

export default router;