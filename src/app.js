import express from "express"
import ClientesController from "./Controllers/ClientesController.js"
import PedidosController from "./Controllers/PedidosController.js"
const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})


server.post("/clientes",ClientesController.create)
server.get("/clientes",ClientesController.read)
server.put("/clientes/:id_cliente",ClientesController.update)
server.delete("/clientes/:id_cliente",ClientesController.delete)


server.post("/pedidos",PedidosController.create)
server.get("/pedidos",PedidosController.read)
server.put("/pedidos/:id_pedido",PedidosController.update)
server.delete("/pedidos/:id_pedido",PedidosController.delete)


server.listen(5000)