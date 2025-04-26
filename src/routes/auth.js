const { Router } = require('express');
const { register, login, users } = require('../controllers/authController');
const authenticateToken = require('../middlewares/auth');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

authRouter.get('/protected-route', authenticateToken, (req, res) => {
    res.send('Esta es una ruta protegida.');
});

module.exports = authRouter;