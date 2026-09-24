import clientes from '../data/clientes.js';

export function listarClientes(req, res) {
    res.json(clientes);   
}