const Koa = require('koa')
const bodyParser = require('koa-body')
const json = require('koa-json')
const config = require('./config')
const kcors = require('kcors')

const auth = require('./routes/auth')
const warehouse = require('./routes/warehouse')
const product = require('./routes/product')
const order = require('./routes/order')

const app = new Koa()
app.use(bodyParser())
app.use(json())
app.use(kcors())

app.use(auth.routes())
app.use(warehouse.routes())
app.use(product.routes())
app.use(order.routes())

app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`)
})