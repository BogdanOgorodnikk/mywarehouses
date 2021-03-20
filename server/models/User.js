const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'users', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        role_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        ban: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    },
    {
        timestamps: false
    }
)