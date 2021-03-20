const Router = require('koa-router')
const router = new Router()

const authMiddleware = require('../middleware/auth.middleware')
const productControllers = require('../controllers/productControllers')

router.get('/api/products/:town_id', authMiddleware, productControllers.getProducts)
router.post('/api/product/:town_id', authMiddleware, productControllers.createProduct)
router.put('/api/product/:id', authMiddleware, productControllers.putProduct)
router.delete('/api/product/:id', authMiddleware, productControllers.destroyProduct)

module.exports = router