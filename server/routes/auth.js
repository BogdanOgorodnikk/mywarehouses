const Router = require('koa-router')
const router = new Router()

const authMiddleware = require('../middleware/auth.middleware')
const authControllers = require('../controllers/authControllers');


router.post('/api/register', authControllers.register)
router.post('/api/login', authControllers.login)
router.get('/api/auth', authMiddleware, authControllers.auth)

module.exports = router