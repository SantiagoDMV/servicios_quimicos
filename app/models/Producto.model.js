import { DataTypes} from "sequelize";
import sequelize from "../../config/config";
import Precio from "./Precio.model";
import ProductoMateriaPrima from "./ProductoMateriaPrima.model";
import ClientePedido from "./ClientePedido.module";

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    presentacion : {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    preparacion: {
        type: DataTypes.STRING,
        allowNull: true
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
        deletedAt: 'eliminado_en',
        paranoid: true
    }
)

Producto.hasMany(Precio,{
    foreignKey: 'id_producto',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

Precio.belongsTo(Producto,{
    foreignKey: 'id_producto',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})


Producto.hasMany(ProductoMateriaPrima,{
    foreignKey: 'id_producto',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})
 
ProductoMateriaPrima.belongsTo(Producto,{
    foreignKey: 'id_producto',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

Producto.hasMany(ClientePedido,{
    foreignKey: 'id_producto',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ClientePedido.belongsTo(Producto,{
    foreignKey: 'id_producto',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default Producto;

