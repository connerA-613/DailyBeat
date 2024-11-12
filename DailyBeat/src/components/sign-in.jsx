import { signIn } from "../../auth"
import {Button} from "@/components/ui/button";
import Image from "next/image";
 
function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("spotify")
      }}
    >
      <Button type="submit" className="justify-center items-center w-36 h-16 hover:bg-lime-400 mb-10">Login with
          <Image src="/spotify.png" alt="google" width={30} height={30}></Image>
        </Button>
    </form>
  )
} export { SignIn }