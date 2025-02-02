import { DataTypes } from "sequelize";
import sequelize from "../../config/config";
import Pedido from "./Pedido.model";

const EstadoPedido = sequelize.define('estadoPedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    creado_en: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    actualizado_en: {
        type: DataTypes.DATE,
        allowNull: true
    },
    eliminado_en: {
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

EstadoPedido.hasMany(Pedido,{
    foreignKey: 'id_estado',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

Pedido.belongsTo(EstadoPedido,{
    foreignKey: 'id_estado',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default EstadoPedido;