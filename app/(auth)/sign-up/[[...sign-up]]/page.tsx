import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen grid place-items-center">
      <SignUp />;
    </div>
  );
}
