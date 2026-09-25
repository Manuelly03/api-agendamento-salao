import profissionais from '../data/profissionais.js';

export function listarProfissionais(req, res) {
    res.json(profissionais);
}