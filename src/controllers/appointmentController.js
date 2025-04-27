const appointmentService = require('../services/appointmentService');

exports.getUserAppointments = async (req, res) => {
    try{
        const userId = req.user.id;
        const appointments = await appointmentService.getUserAppointments(userId);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}