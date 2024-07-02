import mysql from "mysql2"
import config from "../Config.js"

class ClientesModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_cliente,endereco){
        let sql = `INSERT INTO clientes (nome_cliente,endereco)  VALUES("${nome_cliente}","${endereco}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Cliente inserido"])

            })

        });
    }

    read(){
        let sql = `SELECT * FROM clientes;`
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
    update(id_cliente,nome_cliente){
        let sql = `UPDATE clientes SET nome_cliente="${nome_cliente}" WHERE id_cliente="${id_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado!"])

            })

        });   


    }
    delete(id_cliente){
        let sql = `DELETE FROM clientes WHERE id_cliente="${id_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado!"])

            })

        });   

    }
}




export default new ClientesModel();