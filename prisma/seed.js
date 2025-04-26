const { PrismaClient } = require ('../generated/prisma');
// const { connect } = require('../src/routes/auth');
const prisma = new PrismaClient();

async function main() {

    let users = [];
    let timeBlocks = [];
    // Crear usuarios en la db
    const demoUsers = [
        { name: 'Usuario 1', email: 'juan@example.com', password: 'pass1234', role: 'USER' },
        { name: 'Admin 1', email: 'maria@example.com', password: 'admin1234', role: 'ADMIN' }
    ];

    for (const user of demoUsers){
        const us = await prisma.user.create({data:user});
        users.push(us);
    }

    //crear bloques de tiempo disponible

    const demoTimeBlocks = [
        { startTime: new Date('2025-05-01T10:00:00Z'), endTime: new Date('2025-05-01T11:00:00Z')},
        { startTime: new Date('2025-05-01T14:00:00Z'), endTime: new Date('2025-05-01T15:00:00Z')}
    ]

    for (const timeBlock of demoTimeBlocks){
        const tb = await prisma.timeBlock.create({data: timeBlock});
        timeBlocks.push(tb);
    }

    // Crear citas

    await prisma.appointment.create({
        data:{
            date: new Date('2025-05-01T14:00:00Z'),
            user: { connect: { id: users[0].id }},
            timeBlock: { connect: { id: timeBlocks[1].id }}
        }
    })

    console.log('Usuarios de demostración creados con éxito');

    // await prisma.user.deleteMany();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });