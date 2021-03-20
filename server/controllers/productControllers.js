const { sequelize } = require('../database/db')

const getProducts = async(ctx) => {
    try {
        if(ctx.user.role_id < 1 || ctx.user.role_id > 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(ctx.user.role_id === 1 || ctx.user.role_id === 2) {
            const products = await sequelize.query(`
                SELECT id, title, characteristicks, number, price, warehouse_id
                FROM products
                WHERE warehouse_id = ${ctx.params.town_id}
            `)
            return ctx.body = {
                products: products[0]
            }
        } else if(ctx.user.role_id === 3) {
            const products = await sequelize.query(`
                SELECT products.id, products.title, products.characteristicks, products.number, products.price, products.warehouse_id, products.creater_id, products.data_create, users.email
                FROM products
                LEFT JOIN users ON products.creater_id = users.id
                WHERE products.warehouse_id = ${ctx.params.town_id}
            `)
            return ctx.body = {
                products: products[0]
            }
        }
    } catch(e) {
        return ctx.status = 400
    }
}

const createProduct = async(ctx) => {
    const {title, characteristicks, number, price} = ctx.request.body
    try {
        if(ctx.user.role_id != 2 && ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(number < 1 || price < 1) {
            return ctx.status = 400
        } else if(title.length < 3 || characteristicks.length < 3) {
            return ctx.status = 400
        }
        const product = await sequelize.query(`
            INSERT INTO products(title, characteristicks, number, price, warehouse_id, creater_id)
            VALUES('${title}', '${characteristicks}', '${number}', '${price}', '${ctx.params.town_id}', '${ctx.user.id}')
        `)
        return ctx.body = 'product created'
    } catch(e) {
        return ctx.status = 400
    }
}

const putProduct = async(ctx) => {
    const {title, characteristicks, number, price} = ctx.request.body
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(number < 1 || price < 1) {
            return ctx.status = 400
        } else if(title.length < 3 || characteristicks.length < 3) {
            return ctx.status = 400
        }
        const product = await sequelize.query(`
            UPDATE products
            SET title = '${title}', characteristicks = '${characteristicks}', number = '${number}', price = '${price}'
            WHERE id = ${ctx.params.id}
        `)
        return ctx.body = 'product updated'
    } catch(e) {
        return ctx.status = 400
    }
}

const destroyProduct = async(ctx) => {
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const product = await sequelize.query(`
            DELETE FROM products
            WHERE id = ${ctx.params.id}
        `)
        return ctx.body = 'Product destroy'
    } catch(e) {
        return ctx.status = 400
    }
}

module.exports = {
    getProducts,
    createProduct,
    putProduct,
    destroyProduct
}