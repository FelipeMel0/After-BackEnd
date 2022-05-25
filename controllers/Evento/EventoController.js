const Categoria = require("../../models/evento/Categoria")
const Evento = require("../../models/evento/Evento")
const IntermEventoCelebridade = require("../../models/celebridade/IntermediariaEventoCelebridade")
const VerificacaoUsuario = require("../../models/usuarioComum/VerificacaoUsuario")
const Celebridade = require("../../models/celebridade/Celebridade")
const EnderecoEvento = require("../../models/evento/EnderecoEvento")
const Empresa = require("../../models/empresa/Empresa")
const Perfil = require("../../models/perfil/Perfil")
const IntermEventoAssunto = require("../../models/evento/IntermEventoAssunto")
const ImagensEvento = require("../../models/evento/ImagensEvento")
const Lote = require("../../models/evento/ingresso/Lote")
const VariedadeIngressoLote = require("../../models/evento/ingresso/VariedadeIngressoLote")
const UsuarioComum = require("../../models/usuarioComum/UsuarioComum")

const fs = require('fs')
const FaixaEtaria = require("../../models/evento/FaixaEtaria")
const TipoEvento = require("../../models/evento/TipoEvento")
const ContaEmpresa = require("../../models/empresa/contaEmpresa/ContaEmpresa")

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

    async cadastroEventoEndereco(req, res) {

        const {
            titulo,
            descricao,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            capa,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        // const capa = req.files.capa[0].path

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

        const {
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero
        } = req.body

        const enderecoEvento = await EnderecoEvento.create({
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero,
            tblEventoIdEvento
        })

        return res.status(201).json({
            "message": "Cadastro feito com sucesso!"
        })

    }

    async cadastroEventoCompleto(req, res) {

        const {
            titulo,
            descricao,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        const capa = req.files.capa[0].path

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

        const {
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero
        } = req.body

        const enderecoEvento = await EnderecoEvento.create({
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero,
            tblEventoIdEvento
        })

        const tblAssuntoIdAssunto = req.body.tblAssuntoIdAssunto

        const assunto = await IntermEventoAssunto.create({
            tblAssuntoIdAssunto,
            tblEventoIdEvento
        })

        // const primeiraImagem = req.files.imagem[0].path 

        if (req.files.imagem != null || req.files.imagem != undefined) {
            if(req.files.imagem[0] != undefined){
                const primeiraImagem = req.files.imagem[0].path
                const imagemEvento = await ImagensEvento.create({
                    imagem: primeiraImagem,
                    tblEventoIdEvento
                })
            }         
        }

        // const segundaImagem = req.files.imagem[1].path

        if (req.files.imagem != null || req.files.imagem != undefined) {
            if(req.files.imagem[1] != undefined){
                const segundaImagem = req.files.imagem[1].path
                const imagemEvento = await ImagensEvento.create({
                    imagem: segundaImagem,
                    tblEventoIdEvento
                })
            }    
        }

        if (req.files.imagem != null || req.files.imagem != undefined) {
            if(req.files.imagem[2] != undefined){
                const terceiraImagem = req.files.imagem[2].path
                const imagemEvento = await ImagensEvento.create({
                    imagem: terceiraImagem,
                    tblEventoIdEvento
                })
            }      
        }

        if (req.files.imagem != null || req.files.imagem != undefined) {
            if(req.files.imagem[3] != undefined){
                const quartaImagem = req.files.imagem[3].path
                const imagemEvento = await ImagensEvento.create({
                    imagem: quartaImagem,
                    tblEventoIdEvento
                })
            }   
        }

        if (req.files.imagem != null || req.files.imagem != undefined) {
            if(req.files.imagem[4] != undefined){
                const quintaImagem = req.files.imagem[4].path
                const imagemEvento = await ImagensEvento.create({
                    imagem: quintaImagem,
                    tblEventoIdEvento
                })
            }     
        }

        const tblCelebridadeIdCelebridade = req.body.tblCelebridadeIdCelebridade

        if (tblCelebridadeIdCelebridade != null || tblCelebridadeIdCelebridade != undefined || tblCelebridadeIdCelebridade != "" || tblCelebridadeIdCelebridade != 0) {
            // const tblCelebridadeIdCelebridade = req.body.tblCelebridadeIdCelebridade
            const celebridade = await IntermEventoCelebridade.create({
                tblCelebridadeIdCelebridade,
                tblEventoIdEvento
            })
        }

        return res.status(201).json({
            "message": "Cadastro feito com sucesso!"
        })

    }

    async cadastroEventoCompletoMobile(req, res) {

        const {
            titulo,
            descricao,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        let buffer = new Buffer.from(req.body.capa[0], 'base64')
        let capa = './uploads/' + Date.now().toString() + 'capa.jpg'

        fs.writeFileSync(capa, buffer, 'base64', (error)=>{

            if(error) console.log(error)
    
        })
        // const capa = req.files.capa[0].path

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

        const {
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero
        } = req.body

        const enderecoEvento = await EnderecoEvento.create({
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero,
            tblEventoIdEvento
        })

        const tblAssuntoIdAssunto = req.body.tblAssuntoIdAssunto

        const assunto = await IntermEventoAssunto.create({
            tblAssuntoIdAssunto,
            tblEventoIdEvento
        })

        return res.status(201).json({
            "message": "Cadastro feito com sucesso!"
        })

    }

    async listar(req, res) {

        // const evento = await evento.findAll()

        // return res.json(evento)

        const evento = await Evento.findAll({
            include: [{
                model: IntermEventoCelebridade,
                include: [{
                    model: Celebridade,
                    attributes: ['idCelebridade'],
                    include: [{
                        model: VerificacaoUsuario,
                        attributes: ['nickname'],
                        include: [{
                            model: UsuarioComum,
                            include:[{
                                model: Perfil,
                                attributes: ['imagemPerfil']
                            }]
                        }]
                    }]
                }]
            }, {
                model: Categoria,
                attributes: ['nomeCategoria']
            }, {
                model: Empresa,
                include: [{
                    model: Perfil
                }]
            }, {
                model: FaixaEtaria,
                attributes: ['idade']
            }, {
                model: TipoEvento,
                attributes: ['tipo']
            }, {
                model: ContaEmpresa
            }
        ],
        })

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
                        attributes: ['idCelebridade'],
                        include: [{
                            model: VerificacaoUsuario,
                            attributes: ['nickname'],
                            include: [{
                                model: UsuarioComum,
                                include:[{
                                    model: Perfil,
                                    attributes: ['imagemPerfil']
                                }]
                            }]
                        }]
                    }]
                }, {
                    model: Categoria
                }, {
                    model: Empresa,
                    include:[{
                        model: Perfil
                    }]
                }],
            })
            .then((eventoId) => {
                res.send(eventoId)
            })

    }

    async acharIdEvento(req, res) {
        const {
            idEvento
        } = req.params

        const evento = Evento.findByPk(idEvento, {
            include: [{
                    model: IntermEventoCelebridade,
                    include: [{
                        model: Celebridade,
                        attributes: ['idCelebridade'],
                        include: [{
                            model: VerificacaoUsuario,
                            attributes: ['nickname'],
                            include: [{
                                model: UsuarioComum,
                                include:[{
                                    model: Perfil,
                                    attributes: ['imagemPerfil']
                                }]
                            }]
                        }]
                    }]
                }, {
                    model: EnderecoEvento
                },
                {
                    model: Empresa,
                    include: [{
                        model: Perfil
                    }]
                }, {
                    model: Lote,
                    include: [{
                        model: VariedadeIngressoLote
                    }]
                }
            ]
        }).then((eventoId) => {
            res.send(eventoId)
        })
    }

    async deletar(req, res) {

        const idEvento = req.params.idEvento

        Evento.findByPk(idEvento).then((Evento) => {
            
            let capa = Evento.capa

            Evento.destroy({
                where: {
                    idEvento: idEvento
                }
            }).then(
                () => {
                    if (capa != null) {
                        fs.unlink(capa, (error) => {

                            if (error) {
                                console.log('Erro ao excluir a imagem: ' + error);
                            } else {
                                console.log('Imagem de capa excluída com sucesso!');
                            }

                        })
                    }

                    res.send('Evento excluído')

                }
            )
        })


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