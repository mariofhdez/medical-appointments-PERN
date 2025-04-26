const { Router } = require('express');
const { createTimeBlock, listReservations, listUsers } = require('../controllers/adminController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/time-blocks', authenticateToken, createTimeBlock);
router.get('/reservations', authenticateToken, listReservations);
router.get('/users', authenticateToken, listUsers);

module.exports = router;