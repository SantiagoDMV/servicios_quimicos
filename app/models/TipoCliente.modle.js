import sequelize from "../../config/config";
import { DataTypes } from "sequelize"
import ClienteProveedor from "./ClienteProveedor.model"

const TipoCliente = sequelize.define('tipoCliente',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    creado_en:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
actualizado_en:{
    type: DataTypes.DATE,
    allowNull: true
},
eliminado_en:{
    type: DataTypes.DATE,
    allowNull: true
}
},{
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en',
    deletedAt: 'eliminado_en',
    paranoid: true
})

TipoCliente.hasMany(ClienteProveedor,{
    foreignKey: 'id_tipo',
    sourceKey: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

ClienteProveedor.belongsTo(TipoCliente,{
    foreignKey: 'id_tipo',
    targetId: 'id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})

export default TipoCliente;