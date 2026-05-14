import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function UserPage() {
  const user = await getServerSession(authOptions);
  console.log("User session:", user);
  return (
    <div className="container">
      <h1 className="font-bold text-2xl">User Page</h1>
      <p>Welcome to your user dashboard!</p>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
