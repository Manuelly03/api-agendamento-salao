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