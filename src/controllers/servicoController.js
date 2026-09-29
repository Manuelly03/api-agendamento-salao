import servicos from '../data/servicos.js';

export function listarServicos(req, res) {
    res.json(servicos);
}
export function criarServico(req, res) {
    const novoServico = {
    id: servicos.length + 1,
    nome: req.body.nome,
    duracao: req.body.duracaoMinutos,
    preco: req.body.preco
    };

    
    servicos.push(novoServico);
    res.status(201).json(novoServico);
}