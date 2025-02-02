import { DataTypes } from "sequelize";
import sequelize from "../../config/config";

const Precio = sequelize.define('Precio',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    precio:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    creado_en: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    actualizado_en: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    eliminado_en: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},
{
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en',
    deletedAt: 'eliminado_en'
})

export default Precio;