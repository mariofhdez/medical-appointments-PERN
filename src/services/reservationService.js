const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.createReservation = async (data, userId) => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId,
            userId: userId
        }
    });
    if (conflict) {
        throw new Error('This time-block is already scheduled');
    }
    return prisma.appointment.create({
        data: {
            date: data.date,
            userId: userId,
            timeBlockId: data.timeBlockId
        }
    });
}

exports.getReservation = async (id) => {
    console.log('service');
    return prisma.appointment.findUnique({
        where: { id: parseInt(id, 10) }
    });
}

exports.updateReservation = async (id, data, userId) => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId,
            id: { not: parseInt(id, 10) }
        }
    });
    if (conflict) {
        throw new Error('This time-block is already scheduled');
    }
    return prisma.appointment.update({
        where: { id: parseInt(id, 10) },
        data: {
            date: data.date,
            userId: userId,
            timeBlockId: data.timeBlockId
        }
    });
};

exports.deleteReservation = async (id) => {
    return prisma.appointment.delete({
        where: {
            id: parseInt(id, 10),
        }
    });
};