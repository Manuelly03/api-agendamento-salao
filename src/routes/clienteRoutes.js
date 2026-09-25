import express from 'express';
import { 
    listarClientes,
    criarCliente
} from '../controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', listarClientes);
router.post('/clientes', criarCliente);
router.get('/clientes/:id', buscarClientePorId);

export default router;