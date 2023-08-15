import Card from "@/components/card";

export default async function Page() {
  return (
    <main className="p-7 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}
