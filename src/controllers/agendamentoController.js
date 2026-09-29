import agendamentos from '../data/agendamentos.js';

export function listarAgendamentos(req, res) {
    res.json(agendamentos);
}

export function criarAgendamento(req, res) {
    const novoAgendamento = {
        id: agendamentos.length + 1,
        clienteId: req.body.clienteId,
        profissionalId: req.body.profissionalId,
        servicoId: req.body.servicoId,
        inicio: req.body.inicio,
        status: 'agendado',
    };
    agendamentos.push(novoAgendamento);
    res.status(201).json(novoAgendamento);
}
export function buscarAgendamentoPorId(req, res) {
    const id = Number(req.params.id);
    const agendamento = agendamentos.find(agendamento => agendamento.id === id);
    if (!agendamento) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado' });
    }
    res.json(agendamento);
}