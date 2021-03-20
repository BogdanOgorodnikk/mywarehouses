const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const validator = require('validator')
const { sequelize } = require('../database/db')

const register = async(ctx) => {
    const {email, password, name, phone} = ctx.request.body;

    try {

        if(validator.isEmail(email) == false) {
            return ctx.body = 'error email'
        } if(validator.isEmpty(password, {ignore_whitespace: true}) == true
                || validator.isLength(password, {min: 6, max: 16}) == false)  {
            return ctx.body = 'error password'
        } else if(validator.isEmpty(name, {ignore_whitespace: true}) == true
                || validator.isLength(name, {min: 2, max: 64}) == false) {
            return ctx.body = 'error name'
        } else if(validator.isEmpty(phone, {ignore_whitespace: true}) == true
                || validator.isLength(phone, {min: 10, max: 10}) == false) {
            return ctx.body = 'error phone'
        }

        const candidate = await sequelize.query(`
            SELECT * from users where email='${email}'
        `)

        if(candidate[0].length >= 1) {
            return ctx.status = 400;
        } else {
            const hash = await bcrypt.hashSync(password, 10);
            const newUser = await sequelize.query(`
                INSERT INTO users(email, password, name, phone, role_id, ban)
                VALUES ('${email}', '${hash}', '${name}', '${phone}', 1, true)
            `)
            return ctx.body = newUser
        }
    } catch(e) {
        return ctx.status = 400;
    }
}

const login = async(ctx) => {
    const {email, password} = ctx.request.body;

    try {
        const user = await sequelize.query(`
            SELECT * from users where email='${email}'
        `)

        if(user[0].length == 0) {
            return ctx.status = 404
        }

        const isPassValid = bcrypt.compareSync(password, user[0][0].password)
        if(!isPassValid) {
            return ctx.body = 'invalid password';
        }

        const token = jwt.sign({id: user[0][0].id, role_id: user[0][0].role_id, ban: user[0][0].ban}, config.SECRETKEY, {expiresIn: "1h"})
        return ctx.body = {
            token,
            user: {
                id: user[0][0].id,
                email: user[0][0].email,
                name: user[0][0].name,
                phone: user[0][0].phone,
                role_id: user[0][0].role_id,
                ban: user[0][0].ban
            }
        }
    } catch(e) {
        console.log(e)
        return ctx.status = 400;
    }
}

const auth = async (ctx) => {
    try {
        const user = await sequelize.query(`
            SELECT * FROM users WHERE id = ${ctx.user.id}
        `)
        const token = jwt.sign({id: user[0][0].id, role_id: user[0][0].role_id, ban: user[0][0].ban}, config.SECRETKEY, {expiresIn: "1h"})
        return ctx.body = {
            token,
            user: {
                id: user[0][0].id,
                email: user[0][0].email,
                name: user[0][0].name,
                phone: user[0][0].phone,
                role_id: user[0][0].role_id,
                ban: user[0][0].ban
            }
        }
    } catch (e) {
        ctx.body = 'Task does not exist' + e
    }
}

module.exports = {
    register,
    login,
    auth
}