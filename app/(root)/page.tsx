import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Card from "@/components/card";
import { fetchUser } from "@/lib/actions/user.actions";
import Navbar from "@/components/sidebar";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo) redirect("/onboarding");

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="p-7 grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
