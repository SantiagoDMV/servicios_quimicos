import { DataTypes } from "sequelize";
import sequelize from "../../config/config";
const Usuario = sequelize.define('usuario',{
    nombre:{
        type: DataTypes.STRING,
    },
    apellido:{
        type: DataTypes.STRING,
    },
    cedula:{
        type: DataTypes.STRING,
    },
    telefono:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    creado_en:{
        type: DataTypes.DATE(),
        defaultValue: DataTypes.NOW
    },
    actualizado_en:{
        type: DataTypes.DATE,
        allowNull: true
    },
    eliminado_en:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: true,
    deletedAt: "eliminado_en",
    updatedAt: "actualizado_en",
    paranoid: true
})

export default Usuario;