const Categoria = require("../../models/evento/Categoria")
const Evento = require("../../models/evento/Evento")
const IntermEventoCelebridade = require("../../models/celebridade/IntermediariaEventoCelebridade")
const VerificacaoUsuario = require("../../models/usuarioComum/VerificacaoUsuario")
const Celebridade = require("../../models/celebridade/Celebridade")
const EnderecoEvento = require("../../models/evento/EnderecoEvento")

class EventoController {

    async cadastro(req, res) {

        const {
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

        const evento = await Evento.create({
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa,
            tblEmpresaIdEmpresa
        })

        return res.status(201).json(evento)

    }

    async cadastroEndereco(req, res){

        const {
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

        const evento = await Evento.create({
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa,
            tblEmpresaIdEmpresa
        })

        const tblEventoIdEvento = evento.idEvento

        const {cep, logradouro, complemento, bairro, cidade, estado} = req.body

        const enderecoEvento = await EnderecoEvento.create({
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            tblEventoIdEvento
        })

        return res.status(201).json({"message": "Cadastro feito com sucesso!"})

    }

    async listar(req, res) {

        const evento = await Evento.findAll()

        return res.json(evento)

    }

    async acharPorId(req, res) {

        const {
            tblEmpresaIdEmpresa
        } = req.params

        var evento = Evento.findAll({
            where: {
                tblEmpresaIdEmpresa: tblEmpresaIdEmpresa
            },
            include: [{
                model: IntermEventoCelebridade,
                include: [{
                    model: Celebridade,                   
                    include: [{
                        model: VerificacaoUsuario,                       
                    }]
                }]
            },{
                model: Categoria
            }],
        })
        .then((eventoId)=>{
            res.send(eventoId)
        })


    }

    async deletar(req, res) {

        const idEvento = req.params.idEvento

        Evento.destroy({
            where: {
                idEvento: idEvento
            }
        }).then(
            () => {
                res.send('Evento excluído')
            }
        )

    }

    async editar(req, res) {

        const idEvento = req.params.idEvento

        Evento.update(req.body, {
            where: {
                idEvento: idEvento
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Update funcionou"
                });
            } else {
                res.send({
                    message: `Erro ao dar update na Empresa com id=${idEvento}.`
                });
            }
        })

    }

}

module.exports = new EventoController()