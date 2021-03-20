const { sequelize } = require('../database/db')

const getOrders = async(ctx) => {
    try {
        if(ctx.user.role_id < 1 || ctx.user.role_id > 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(ctx.user.role_id === 1) {
            const orders = await sequelize.query(`
                SELECT orders.id, orders.number, orders.data_create, orders.owner_id, orders.warehouse_id, orders.recipient_city, orders.status, 
                orders.updater_id, orders.product_id, products.title, products.price, warehouses.town, users.name
                FROM orders
                JOIN products ON products.id = orders.product_id
                JOIN warehouses ON warehouses.id = orders.warehouse_id
                JOIN users ON users.id = orders.updater_id
                WHERE orders.owner_id = ${ctx.user.id}
            `)
            return ctx.body = {
                orders: orders[0]
            }
        } else if(ctx.user.role_id === 2) {
            const orders = await sequelize.query(`
                SELECT orders.id, orders.number, orders.data_create, orders.owner_id, orders.warehouse_id, orders.recipient_city, orders.status, 
                orders.updater_id, orders.product_id, products.title, products.price, warehouses.town, users.email
                FROM orders
                JOIN products ON products.id = orders.product_id
                JOIN warehouses ON warehouses.id = orders.warehouse_id
                JOIN users ON users.id = orders.owner_id
                WHERE warehouses.manager_id = ${ctx.user.id} 
            `)
            return ctx.body = {
                orders: orders[0]
            }
        } else if(ctx.user.role_id === 3) {
            const orders = await sequelize.query(`
                SELECT orders.id, orders.number, orders.data_create, orders.owner_id, orders.warehouse_id, orders.recipient_city, orders.status, 
                orders.updater_id, orders.product_id, products.title, products.price, warehouses.town, users.email
                FROM orders
                JOIN products ON products.id = orders.product_id
                JOIN warehouses ON warehouses.id = orders.warehouse_id
                JOIN users ON users.id = orders.owner_id
            `)
            return ctx.body = {
                orders: orders[0]
            }
        }
    } catch(e) {
        return ctx.status = 400
    }
}

const createOrder = async(ctx) => {
    const {number, recipient_city} = ctx.request.body
    try {
        if(ctx.user.role_id < 1 || ctx.user.role_id > 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(number < 1) {
            return ctx.status = 400
        } else if(recipient_city.length < 2) {
            return ctx.status = 400
        }
        const order = await sequelize.query(`
            INSERT INTO orders(number, recipient_city, warehouse_id, owner_id, product_id)
            VALUES('${number}', '${recipient_city}', '${ctx.params.warehouse_id}', '${ctx.user.id}', '${ctx.params.product_id}')
        `)
        return ctx.body = 'order created'
    } catch(e) {
        return ctx.status = 400
    }
}

module.exports = {
    getOrders,
    createOrder
}