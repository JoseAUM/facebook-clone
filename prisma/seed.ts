import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Change const to true if you want to clear all data from DB before seeding
const RESET_DATABASE = true;

const main = async () => {
  //Delete all data from DB
  if (RESET_DATABASE) {
    const tablenames = await prisma.$queryRaw<
      Array<{ tablename: string }>
    >`SELECT "tablename" FROM pg_tables WHERE schemaname='public'`;

    const tables = tablenames
      .map(({ tablename }) => tablename)
      .filter((name) => name !== '_prisma_migrations')
      .map((name) => `"public"."${name}"`)
      .join(', ');

    try {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
    } catch (error) {
      console.log(error);
    }
  }

  await prisma.user.create({
    data: {
      id: 'clf7n24f50000g38ov6wmcwgw',
      email: 'jose@gmail.com',
      firstName: 'Jose',
      lastName: 'Ulloa',
      profilePic: '/dog.svg'
    },
  });

  await prisma.post.create({
    data: {
      authorId: 'clf7n24f50000g38ov6wmcwgw',
      content:
        'Hola este es mi primer post. 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞',
    },
  });

  await prisma.post.create({
    data: {
      authorId: 'clf7n24f50000g38ov6wmcwgw',
      content: 'Hola este es mi segundo post y este es mucho mas pichudo.  😞',
    },
  });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
