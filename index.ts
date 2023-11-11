import { PrismaClient } from "@prisma/client"; //import コンストラクタ

const prisma = new PrismaClient(); //インスタンス化

async function main() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
