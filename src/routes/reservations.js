const { Router } = require('express');
const authenticateToken = require('../middlewares/auth');

const reservationController = require('../controllers/reservationController');

const router = Router();

router.post('/', authenticateToken, reservationController.createReservation);
router.get('/:id', authenticateToken, reservationController.getReservation);
router.put('/:id', authenticateToken, reservationController.updateReservation);
router.delete('/:id', authenticateToken, reservationController.deleteReservation);

module.exports = router;