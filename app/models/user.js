//~import modules
const {
    Model,
    Sequelize
} = require('sequelize');
//~connect to DB
const sequelize = require('../database');

class User extends Model {};

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'users'
});

module.exports = User;