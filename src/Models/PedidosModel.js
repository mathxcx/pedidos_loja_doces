import mysql from "mysql2"
import config from "../Config.js"

class PedidosModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(desc_ped,valor_total,id_cliente){
        let sql = `INSERT INTO pedidos (desc_ped,valor_total,id_cliente) VALUES("${desc_ped}",${valor_total},"${id_cliente}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Pedido Inserido!"])

            })

        });
    }

    read(){
        let sql = `SELECT * FROM pedidos;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])

            })

        });
    }
    update(desc_ped,valor_total,id_cliente,id_pedido){
        let sql = `UPDATE pedidos SET desc_ped="${desc_ped}", valor_total=${valor_total}, id_cliente="${id_cliente}" WHERE id_pedido="${id_pedido}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido Atualizado!"])

            })

        });   


    }
    delete(id_pedido){
        let sql = `DELETE FROM pedidos WHERE id_pedido="${id_pedido}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido Deletado!"])

            })

        });   

    }
}






export default new PedidosModel();