import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

export const User = sequelize.define('users', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  segundo_apellido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  constraseña: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
