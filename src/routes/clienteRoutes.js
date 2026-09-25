import express from 'express';
import { 
    listarClientes,
    criarCliente,
    buscarClientePorId,
    atualizarCliente,
    excluirCliente
} from '../controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', listarClientes);
router.post('/clientes', criarCliente);
router.get('/clientes/:id', buscarClientePorId);
router.put('/clientes/:id', atualizarCliente);
router.delete('/clientes/:id', excluirCliente);


export default router;