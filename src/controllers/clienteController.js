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

export function atualizarCliente(req, res) {
    const id = Number(req.params.id);
    const cliente = clientes.find(cliente => cliente.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    cliente.nome = req.body.nome;
    cliente.telefone = req.body.telefone;
    cliente.email = req.body.email;
    res.json(cliente);
}

export function excluirCliente(req, res) {
    const id = Number(req.params.id);
    const indice = clientes.findIndex(cliente => cliente.id === id);
    if (indice === -1) {
     return res.status(404).json({ mensagem: 'Cliente não encontrado' });
}
    clientes.splice(indice, 1);
    res.status(204).send();
}
