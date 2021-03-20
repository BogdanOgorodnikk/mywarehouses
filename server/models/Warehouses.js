const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'warehouses', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        town: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        rent: {
            type: Sequelize.INTEGER
        },
        manager_id: {
            type: Sequelize.INTEGER
        },
        data_create: {
            type: Sequelize.DATE
        }
    },
    {
        timestamps: false
    }
)