
import {Card} from "@/components/ui/card";
import {SignIn} from "@/components/sign-in";
export default function Login() {
  return (
    <div className="h-screen gap-7 flex flex-col items-center justify-center mx-auto bg-[url('/logo.jpeg')] bg-cover bg-center">
      <Card className="gap-7 flex flex-col items-center justify-center mx-auto bg-neutral-950">
        <h1 className="mt-10 mx-5 text-7xl font-bold text-zinc-50">
          Welcome to DailyBeat!
        </h1>
        <SignIn></SignIn>
      </Card>
    </div>
  )
}