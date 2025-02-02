import { DataTypes } from "sequelize";
import sequelize from "../../config/config";
import ProductoMateriaPrima from "./ProductoMateriaPrima.model";

const MateriaPrima = sequelize.define('materiaPrima',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stock:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    precio:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    cantidad_minima:{
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

MateriaPrima.hasMany(ProductoMateriaPrima,{
    foreignKey: 'id_materia',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ProductoMateriaPrima.belongsTo(MateriaPrima,{
    foreignKey: 'id_materia',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default MateriaPrima;