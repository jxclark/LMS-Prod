const { PrismaClient } = require('../lib/generated/prisma');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Computer Science' },
        { name: 'Music' },
        { name: 'Photography' },
        { name: 'Engineering' },
        { name: 'Filming' },
      ],
    });
    console.log('Successfully seeded the database table categories');
  } catch (error) {
    console.log('Error seeding the database categories', error);
  } finally {
    await database.$disconnect();
  }
}

main();
