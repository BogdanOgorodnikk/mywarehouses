const { sequelize } = require('../database/db')

const getWarehouses = async(ctx) => {
    try {
        if(ctx.user.role_id < 1 || ctx.user.role_id > 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        if(ctx.user.role_id === 1) {
            const warehouses = await sequelize.query(`
                SELECT town, region
                FROM warehouses
            `)
            return ctx.body = {
                warehouses: warehouses[0]
            }
        } else if(ctx.user.role_id === 2) {
            const warehouses = await sequelize.query(`
                SELECT town, region, rent FROM warehouses
            `)
            return ctx.body = {
                warehouses: warehouses[0]
            }
        } else if(ctx.user.role_id === 3) {
            const warehouses = await sequelize.query(`
                SELECT * FROM warehouses
            `)
            return ctx.body = {
                warehouses: warehouses[0]
            }
        }
    } catch(e) {
        return ctx.status = 400
    }
}

const getManagers = async(ctx) => {
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const managers = await sequelize.query(`
            SELECT id, email
            FROM users
            WHERE role_id = 2
        `)
        return ctx.body = {
            managers: managers[0]
        }
    } catch(e) {
        return ctx.status = 400
    }
}

const createWarehouse = async(ctx) => {
    const {town, region, rent} = ctx.request.body
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const warehouse = await sequelize.query(`
            INSERT INTO warehouses(town, region, rent, manager_id)
            VALUES('${town}', '${region}', '${rent}', '0')
        `)
        return ctx.body = 'Warehouse create'
    } catch(e) {
        return ctx.status = 400
    }
}

const updateWarehouse = async(ctx) => {
    const {town, region, rent} = ctx.request.body
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const warehouse = await sequelize.query(`
            UPDATE warehouses
            SET town = '${town}', region = '${region}', rent = '${rent}'
            WHERE id = ${ctx.params.id}
        `)
        return ctx.body = 'Warehouse update'
    } catch(e) {
        return ctx.status = 400
    }
}

const updateManager = async(ctx) => {
    const {manager_id} = ctx.request.body
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const warehouse = await sequelize.query(`
            UPDATE warehouses
            SET manager_id = '${manager_id}'
            WHERE id = ${ctx.params.id}
        `)
        return ctx.body = 'Warehouses manager update'
    } catch(e) {
        return ctx.status = 400
    }
}

const destroyWarehouse = async(ctx) => {
    try {
        if(ctx.user.role_id != 3 || ctx.user.ban === 1) {
            return ctx.status = 400
        }
        const warehouse = await sequelize.query(`
            DELETE FROM warehouses
            WHERE id = ${ctx.params.id}
        `)
        return ctx.body = 'Warehouse destroy'
    } catch(e) {
        return ctx.status = 400
    }
}

module.exports = {
    getWarehouses,
    getManagers,
    createWarehouse,
    updateWarehouse,
    updateManager,
    destroyWarehouse
}