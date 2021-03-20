const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'orders', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.INTEGER
        },
        recipient_city: {
            type: Sequelize.STRING
        },
        warehouse_id: {
            type: Sequelize.INTEGER
        },
        owner_id: {
            type: Sequelize.INTEGER
        },
        updater_id: {
            type: Sequelize.INTEGER
        },
        product_id: {
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