import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function insertuser(
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  email: string
) {
  const result = await prisma.user2.create({
    data: { username, password, firstname, lastname, email },
  });

  console.log(result);
}

// insertuser(
//   "bko777",
//   "1234567",
//   "ashishhhbk",
//   "karagond07",
//   "bkashishh0777@gmail.com"
// );

async function insertintotodos(
  title: string,
  description: string,
  userid: number
) {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      userid,
    },
  });
  console.log(res);
}

// insertintotodos("football", "go to football", 1);

async function Getalltodos(id: number) {
  const res = await prisma.todos.findMany({
    where: {
      userid: id,
    },
    select: {
      title: true,
      description: true,
      done: true,
      user: true,
    },
  });
  console.log(res);
}

Getalltodos(1);
