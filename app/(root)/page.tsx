import { PrismaClient } from "@prisma/client";
import Image from "next/image";
const prisma = new PrismaClient();

export default async function Home() {
  // await prisma.page.create({
  //   data: {
  //     url: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  //     boook: { connect: { id: 1 } },
  //   },
  // });

  const pages = await prisma.page.findMany();
  console.log({ pages });
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        width={735}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
