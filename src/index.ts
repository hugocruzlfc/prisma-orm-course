import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "josh@gmail.com",
  //     name: "Josh Cruz",
  //     password: "123456",
  //   },
  // });

  // console.log(newUser);

  // const findUser = await prisma.user.findUnique({
  //   where: {
  //     email: "ray@gmail.com",
  //   },
  // });

  // console.log(findUser);

  // const firstUser = await prisma.user.findFirst({
  //   where: {
  //     OR: [
  //       //AND
  //       {
  //         email: {
  //           contains: "ray",
  //         },
  //       },
  //       {
  //         name: {
  //           contains: "Ray",
  //         },
  //       },
  //     ],
  //   },
  // });
  // console.log(firstUser);

  // const userDelete = await prisma.user.delete({
  //   where: {
  //     id: 2,
  //   },
  // });

  // console.log(userDelete);

  // const updateUser = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Ray Cruz",
  //     email: "raycruz@gmail.com",
  //   },
  // });

  // console.log(updateUser);

  // const userUpsert = await prisma.user.upsert({
  //   where: {
  //     id: 2,
  //   },
  //   update: {
  //     email: "hugo@gmail.com",
  //   },
  //   create: {
  //     name: "Hugo Cruz",
  //     email: "hugo@gmail.com",
  //     password: "123456",
  //   },
  // });

  // console.log(userUpsert);

  // await prisma.post.create({
  //   data: {
  //     title: "Post 2",
  //     content: "Content 2",
  //     author: {
  //       connect: {
  //         id: newUser.id,
  //       },
  //     },
  //   },
  // });

  // const users = await prisma.user.findMany({});
  // const posts = await prisma.post.findMany({});
  // console.log(users);
  // console.log(posts);

  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      posts: {
        select: {
          title: true,
          content: true,
        },
      },
    },
  });

  console.log(users);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
