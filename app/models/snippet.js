//~import modules
const {
    Model,
    DataTypes,
    literal
} = require('sequelize');
//~connect to DB
const sequelize = require('../database');

class Snippet extends Model {};

Snippet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: true

    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'snippet'
});

module.exports = Snippet;