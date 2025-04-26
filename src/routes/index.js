const { Router } = require('express');
const authRouter = require('./auth');
const adminRouter = require('./admin');
const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);

router.get('/{any}', (req,res) => {
    res.send('Esta es una respuesta de routes\\index.js');
})

module.exports = router;