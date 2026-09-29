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

export function buscarServicoPorId(req, res) {
    const id = Number(req.params.id);
    const servico = servicos.find(servico => servico.id === id);
    if (!servico) {
        return res.status(404).json({ message: 'Serviço não encontrado!' });
    }
    res.json(servico);
}

export function atualizarServico(req, res) {
    const id = Number(req.params.id);
    const servico = servicos.find(servico => servico.id === id);
    if (!servico) {
    return res.status(404).json({ message: 'Serviço não encontrado!' });
}
 servico.nome = req.body.nome;
 servico.duracao = req.body.duracaoMinutos;
 servico.preco = req.body.preco;

 res.json(servico);
}
export function excluirServico(req, res) {
    const id = Number(req.params.id);
    const indice = servicos.findIndex(servico => servico.id === id);
    if (indice === -1) {
        return res.status(404).json({ message: 'Serviço não encontrado!' });
    }
    servicos.splice(indice, 1);
    res.status(204).send();
}