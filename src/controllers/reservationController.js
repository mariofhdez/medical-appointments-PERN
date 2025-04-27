const reservationService = require("../services/reservationService");

exports.createReservation = async (req, res) => {
    try{
        const reservation = await reservationService.createReservation(req.body, req.user.id);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getReservation = async (req, res) => {
    try {
        console.log('controller');
        const reservation = await reservationService.getReservation(req.params.id);
        if(!reservation){
            return res.status(404).json({ error: 'Reservation not found'});
        }
        return res.status(200).json(reservation);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateReservation = async (req, res) => {
    try {
        const reservation = await reservationService.updateReservation(
            req.params.id,
            req.body,
            req.user.id
        )
        if(!reservation){
            return res.status(404).json({ error: 'Reservation not found'});
        }
        res.status(201).json(reservation);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteReservation = async (req, res) => {
    try {
        const result = await reservationService.deleteReservation(req.params.id);
        if(!result){
            return res.status(404).json({ error: 'Reservation not found'});
        }
        res.status(201).json({ message: `Reservation with id ${req.params.id} was deleted succesfully!`});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}