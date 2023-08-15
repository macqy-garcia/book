import { prisma } from "../db";

export async function fetchUser(id: string) {
  try {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
