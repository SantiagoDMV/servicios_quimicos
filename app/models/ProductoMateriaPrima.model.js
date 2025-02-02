import { DataTypes } from "sequelize";
import sequelize from "../../config/config";

const ProductoMateriaPrima = sequelize.define('productoMateriaPrima', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    cantidad: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    presentacion:{
        type: DataTypes.DECIMAL(10,2),
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

export default ProductoMateriaPrima;