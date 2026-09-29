import agendamentos from '../data/agendamentos.js';

export function listarAgendamentos(req, res) {
    res.json(agendamentos);
}