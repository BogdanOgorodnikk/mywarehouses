const Router = require('koa-router')
const router = new Router()

const authMiddleware = require('../middleware/auth.middleware')
const orderControllers = require('../controllers/orderControllers')

router.get('/api/orders', authMiddleware, orderControllers.getOrders)
router.post('/api/orders/:warehouse_id/:product_id', authMiddleware, orderControllers.createOrder)

module.exports = router