import express from 'express';
import {
     listarServicos 
} from '../controllers/servicoController.js';

const router = express.Router();

router.get('/servicos', listarServicos);

export default router;