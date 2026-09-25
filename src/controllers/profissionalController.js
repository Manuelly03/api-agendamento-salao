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

export function buscarProfissionalPorId(req, res) {
    const id = Number(req.params.id);
    const profissional = profissionais.find(profissional => profissional.id === id);

    if (!profissional) {
    return res.status(404).json({ mensagem: 'Profissional não encontrado' });
}

 res.json(profissional);
}
export function atualizarProfissional(req, res) {
    const id = Number(req.params.id);
    const profissional = profissionais.find(profissional => profissional.id === id);

    if (!profissional) {
    return res.status(404).json({ mensagem: 'Profissional não encontrado' });
}
    profissional.nome = req.body.nome;
    profissional.especialidade = req.body.especialidade;

res.json(profissional);
}