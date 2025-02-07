import sequelize from "../../config/config";
import ClienteProveedor from "./ClienteProveedor.model";
import EstadoPedido from "./EstadoPedido.model";
import Pedido from "./Pedido.model";
import TipoCliente from "./TipoCliente.modle";
import MateriaPrima from "./MateriaPrima.model";
import Producto from "./Producto.model";
import ProductoMateriaPrima from "./ProductoMateriaPrima.model";
import ClientePedido from "./ClientePedido.module";
import Precio from "./Precio.model";
import Usuario from "./Usuario.model"

(async () => {
    try {
        //Verificar la conexion
        sequelize.authenticate()
        console.log('Conexion establecida con la base de datos')
        sequelize.sync()
        console.log('Modelos sincronizados')
    } catch (error) {
        console.log('Error con la conexion con la base de datos: ', error)
    }
})()

export {
    sequelize,
    TipoCliente,
    ClienteProveedor, 
    EstadoPedido,
    Pedido,
    MateriaPrima,
    Producto,
    ProductoMateriaPrima,
    ClientePedido,
    Precio,
    Usuario
}