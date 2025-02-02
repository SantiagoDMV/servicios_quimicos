import { DataTypes } from "sequelize";
import sequelize from "../../config/config";

const ClientePedido = sequelize.define('clientePedido',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, creado_en: {
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

export default ClientePedido;