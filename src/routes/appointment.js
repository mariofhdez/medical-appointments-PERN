const { Router } = require('express');
const router = new Router();

const authenticateToken = require("../middlewares/auth");
const appointmentController = require("../controllers/appointmentController");

router.get('/', authenticateToken, appointmentController.getUserAppointments);

module.exports = router;