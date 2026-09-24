import clientes from '../data/clientes.js';

export function listarClientes(req, res) {
    res.json(clientes);   
}

export function criarCliente(req, res) {
    const novoCliente = {
        id: clientes.length + 1,
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email        
    };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);      
}