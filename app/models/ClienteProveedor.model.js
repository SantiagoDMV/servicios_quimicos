import { DataTypes } from "sequelize";
import sequelize from "../../config/config";
import MateriaPrima from "./MateriaPrima.model";
import ClientePedido from "./ClientePedido.module";

const ClienteProveedor = sequelize.define('clienteProveedor',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
        nombre : {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido : {
            type: DataTypes.STRING,
            allowNull: true
        },
        email : {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono : {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion : {
            type: DataTypes.STRING,
            allowNull: true
        },
        creado_en : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        actualizado_en : {
            type: DataTypes.DATE,
            allowNull: true
        },
        eliminado_en : {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timeStamp: true,
        createdAt: 'creado_en',
        updatedAt: 'actualizado_en',
        deletedAt: 'eliminado_en',
        paranoid: true
    }
)

ClienteProveedor.hasMany(MateriaPrima,{
    foreignKey: 'id_proveedor',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

MateriaPrima.belongsTo(ClienteProveedor,{
    foreignKey: 'id_proveedor',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ClienteProveedor.hasMany(ClientePedido,{
    foreignKey: 'id_cliente',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ClientePedido.belongsTo(ClienteProveedor,{
    foreignKey: 'id_cliente',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default ClienteProveedor;