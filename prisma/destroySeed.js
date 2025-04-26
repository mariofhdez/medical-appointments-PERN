const { PrismaClient } = require ('../generated/prisma');
// const { connect } = require('../src/routes/auth');
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    await prisma.timeBlock.deleteMany();
    await prisma.appointment.deleteMany();
    console.log('Semilla destruida con éxito!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });