//~import modules
const {
    Model,
    DataTypes
} = require('sequelize');
//~connect to DB
const sequelize = require('../database');

class Role extends Model {};

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    sequelize,
    tableName: 'role'
});

module.exports = Role;