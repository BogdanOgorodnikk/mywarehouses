const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'products', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        characteristicks: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.FLOAT
        },
        price: {
            type: Sequelize.FLOAT
        },
        warehouse_id: {
            type: Sequelize.INTEGER
        },
        creater_id: {
            type: Sequelize.INTEGER
        },
        data_create: {
            type: Sequelize.DATE
        },
    },
    {
        timestamps: false
    }
)