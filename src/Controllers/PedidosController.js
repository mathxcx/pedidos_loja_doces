import PedidosModel from "../Models/PedidosModel.js"

class PedidosController{
    constructor(){

    }

    create(req,res){
        const desc_ped = req.body.desc_ped
        const id_cliente = req.body.id_cliente
        const valor_total = req.body.valor_total
        PedidosModel.create(desc_ped,id_cliente).then(
            resposta =>{
                console.debug("Cadastrando um pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao cadastrar um pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        PedidosModel.read().then(
            resposta =>{
                console.debug("Exibindo Pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao exibir pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    update(req,res){
        const id_pedido = req.params.id_pedido
        const desc_ped = req.body.desc_ped
        const id_cliente = req.body.id_cliente
        PedidosModel.update(id_pedido,desc_ped,id_cliente).then(
            resposta =>{
                console.debug("Atualizando Pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao atualizar pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_pedido = req.params.id_pedido
        PedidosModel.delete(id_pedido).then(
            resposta =>{
                console.debug("Deletando Pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao deletar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}





export default new PedidosController()