import Card from "@/components/card";
import Navbar from "@/components/sidebar";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (!userInfo) redirect("/sign-in");

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
