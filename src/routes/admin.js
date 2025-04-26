const { Router } = require('express');
const { createTimeBlock, listReservations } = require('../controllers/adminController');

const router = Router();

router.post('/time-blocks', createTimeBlock);
router.get('/reservations', listReservations);

router.get('/users', async (req, res) => {
    try{
        const users = await listUsersService();
        res.json(users);
    } catch (error) {
        res.status.json({ error: 'Error listando usuarios'})
    }
})

module.exports = router;