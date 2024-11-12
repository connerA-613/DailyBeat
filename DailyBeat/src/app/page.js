import Login from "@/components/login";
import NavBar from "@/components/nav-bar";
import Image from "next/image";
import { auth } from "../../auth";

export default async function Home() {
  const session = await auth()
  if (session?.user) {
    return (
      <div>
        <NavBar session={session}></NavBar>
        <h1>Welcome {session.user.name}</h1>
      </div>
    )
  } else {
    return (
      (<Login></Login>)
  );
  }
}
