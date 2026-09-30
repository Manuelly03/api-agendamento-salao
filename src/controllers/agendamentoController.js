import agendamentos from '../data/agendamentos.js';
import servicos from '../data/servicos.js';

export function listarAgendamentos(req, res) {
    res.json(agendamentos);
}
export function criarAgendamento(req, res) {
    const clienteId = Number(req.body.clienteId);
    const profissionalId = Number(req.body.profissionalId);
    const servicoId = Number(req.body.servicoId);

    const servico = servicos.find(servico => servico.id === servicoId);

    if (!servico) {
        return res.status(400).json({
            mensagem: 'Serviço não encontrado'
        });
    }

    const novoInicio = new Date(req.body.inicio);

    const novoFim = new Date(
        novoInicio.getTime() + servico.duracaoMinutos * 60000
    );

    const conflito = agendamentos.some(agendamento => {
        if (
            Number(agendamento.profissionalId) !== profissionalId ||
            agendamento.status !== 'agendado'
        ) {
            return false;
        }

        const servicoExistente = servicos.find(
            servico => servico.id === Number(agendamento.servicoId)
        );
        if (!servicoExistente) {
            return false;
        }
        const inicioExistente = new Date(agendamento.inicio);
        const fimExistente = new Date(
            inicioExistente.getTime() +
            servicoExistente.duracaoMinutos * 60000
        );
   return novoInicio < fimExistente && novoFim > inicioExistente;
    });
    if (conflito) {
    return res.status(409).json({
    mensagem: 'Profissional já possui um agendamento nesse horário'
        });
    }
    const novoAgendamento = {
    id: agendamentos.length + 1,
    clienteId,
    profissionalId,
    servicoId,
    inicio: req.body.inicio,
    status: 'agendado'
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
agendamentos.splice(indice, 1);
    res.status(204).send();
}

export function cancelarAgendamento(req, res) {
    const id = Number(req.params.id);

    const agendamento = agendamentos.find(
        agendamento => agendamento.id === id);
    if (!agendamento) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado'});
    }
    const inicioAgendamento = new Date(agendamento.inicio);
    const agora = new Date();

    const diferencaHoras =
        (inicioAgendamento - agora) / (1000 * 60 * 60);
    if (diferencaHoras < 2) {
      return res.status(400).json({mensagem: 'O agendamento só pode ser cancelado com pelo menos 2 horas de antecedência'});
    }
    agendamento.status = 'cancelado';
    res.json(agendamento);
}