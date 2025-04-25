const { PrismaClient } = require ('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
    // const demoUsers = [
    //     { name: 'Juan Pérez', email: 'juan@example.com' },
    //     { name: 'María López', email: 'maria@example.com' },
    //     { name: 'Carlos García', email: 'carlos@example.com' }
    // ];

    // for (const user of demoUsers){
    //     await prisma.user.create({data:user});
    // }

    // console.log('Usuarios de demostración creados con éxito');

    await prisma.user.deleteMany();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });