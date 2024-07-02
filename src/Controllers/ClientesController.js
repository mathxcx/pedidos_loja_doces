import ClientesModel from "../Models/ClientesModel.js";


class ClientesController{
    constructor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente
        const endereco = req.body.endereco
        ClientesModel.create(nome_cliente,endereco).then(
            resposta =>{
                console.debug("Cadastrando um cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao cadastrar um cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        ClientesModel.read().then(
            resposta =>{
                console.debug("Exibindo Clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro exibir cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    update(req,res){
        const id_cliente = req.params.id_cliente
        const nome_cliente = req.body.nome_cliente
        ClientesModel.update(id_cliente,nome_cliente).then(
            resposta =>{
                console.debug("Atualizando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao atualizar cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente
        ClientesModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao deletar cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}





export default new ClientesController()