import servicos from '../data/servicos.js';

export function listarServicos(req, res) {
    res.json(servicos);
}