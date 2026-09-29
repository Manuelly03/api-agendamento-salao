import agendamentos from '../data/agendamentos.js';
import clientes from '../data/clientes.js';

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

export function atualizarAgendamento(req, res) {
    const id = Number(req.params.id);
    const agendamento = agendamentos.find(agendamento => agendamento.id === id);
    if (!agendamento) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado' });
    }
    agendamento.clienteId = req.body.clienteId;
    agendamento.profissionalId = req.body.profissionalId;
    agendamento.servicoId = req.body.servicoId;
    agendamento.inicio = req.body.inicio;
    agendamento.status = req.body.status;

    res.json(agendamento);
}
export function excluirAgendamento(req, res) {
    const id = Number(req.params.id);
    const indice = agendamentos.findIndex(agendamento => agendamento.id === id);
    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado' });
    }
    agendamentos.splice(indice, 1); {
    res.status(200).json({ mensagem: 'Agendamento excluído com sucesso' });
}
agendamentos.splice(indice, 1);
    res.status(204).send();
}