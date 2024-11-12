import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import { SignOut } from "@/components/sign-out";

const getProfilePic = async (session) => {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + session.user.accessToken,
    },
  })
  console.log(session.accessToken)
  const data = await res.json()
  return data.images[0].url
}

export default async function NavBar({session}) {
  return (
    <div className="flex flex-row justify-between items-center w-full h-20 bg-neutral-950 text-zinc-50">
      <h1 className="mx-5 text-3xl font-bold">DailyBeat</h1>
      <NavigationMenu className="mx-5">
        <NavigationMenuList>
          <NavigationMenuItem className="mx-5 hover:bg-lime-400 text-zinc-50 rounded-lg">
            <NavigationMenuLink className="mx-5 hover:bg-lime-400 text-zinc-50 w-20 h-20" href="/feed">Feed</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-5 hover:bg-lime-400 text-zinc-50 rounded-lg">
            <NavigationMenuLink className="mx-5 hover:bg-lime-400 text-zinc-50 w-20 h-20" href="/feed">Songs</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-5 hover:bg-lime-400 text-zinc-50 w-30 h-30 rounded-full">
                <img src={await getProfilePic(session)} alt="profile" width={30} height={30} className="rounded-full"></img>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-7 p-12 align-center md:w-[400px] lg:w-[200px] lg:grid-cols-[.75fr_1fr]">
                <NavigationMenuLink >My Profile</NavigationMenuLink>
                <SignOut></SignOut>
              </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )}