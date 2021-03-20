const Router = require('koa-router')
const router = new Router()

const authMiddleware = require('../middleware/auth.middleware')
const warehouseControllers = require('../controllers/warehouseControllers')

router.get('/api/warehouses', authMiddleware, warehouseControllers.getWarehouses)
router.get('/api/managers', authMiddleware, warehouseControllers.getManagers)
router.post('/api/createwarehouse', authMiddleware, warehouseControllers.createWarehouse)
router.put('/api/updatewarehouse/:id', authMiddleware, warehouseControllers.updateWarehouse)
router.put('/api/updatemanager/:id', authMiddleware, warehouseControllers.updateManager)
router.delete('/api/destroywarehouse/:id', authMiddleware, warehouseControllers.destroyWarehouse)

module.exports = router