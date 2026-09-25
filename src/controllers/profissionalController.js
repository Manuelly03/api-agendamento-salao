import profissionais from '../data/profissionais.js';

export function listarProfissionais(req, res) {
    res.json(profissionais);
}
export function criarProfissional(req, res) {
    const novoProfissional = {
    id: profissionais.length + 1,
    nome: req.body.nome,
    especialidade: req.body.especialidade
};
    profissionais.push(novoProfissional);
res.status(201).json(novoProfissional);
}