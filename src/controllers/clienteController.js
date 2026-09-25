import clientes from '../data/clientes.js';

export function listarClientes(req, res) {
    res.json(clientes);   
}
export function buscarClientePorId(req, res) {
    const id = Number(req.params.id);
    const cliente = clientes.find(cliente => cliente.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
    res.json(cliente);
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