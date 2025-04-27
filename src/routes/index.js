const { Router } = require('express');
const authRouter = require('./auth');
const adminRouter = require('./admin');
const reservationRouter = require('./reservations');
const appointmentRouter = require('./appointment');
const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/reservations', reservationRouter);
router.use('/appointments', appointmentRouter);

router.get('/{any}', (req,res) => {
    res.send('Esta es una respuesta de routes\\index.js');
})

module.exports = router;