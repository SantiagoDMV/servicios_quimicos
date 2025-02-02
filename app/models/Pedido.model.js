import sequelize from "../../config/config";
import { DataTypes, DATE } from 'sequelize'
import ClientePedido from "./ClientePedido.module";

const Pedido = sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    total : {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
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
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en',
    deletedAt: 'eliminado_en',
    paranoid: true
}
)

Pedido.hasMany(ClientePedido,{
    foreignKey: 'id_pedido',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ClientePedido.belongsTo(Pedido,{
    foreignKey: 'id_pedido',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default Pedido;