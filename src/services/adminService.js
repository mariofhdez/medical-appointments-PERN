const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

const createTimeBlockService = async (startTime, endTime) => {
    const newTimeBlock = await prisma.timeBlock.create({
        data: {
            startTime: startTime,
            endTime: endTime
        }
    });
    return newTimeBlock;
};

const listReservationsService = async () => {
    const reservations = await prisma.appointment.findMany({
        include: {
            user: true,
            timeBlock: true,
        }
    });
    return reservations;
};

module.exports = { createTimeBlockService, listReservationsService };