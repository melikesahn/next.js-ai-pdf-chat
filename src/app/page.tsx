//import Image from "next/image";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
   <div className="w-screen min-h-screen bg-gradient-to-t from-orange-400 to-sky-400">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
          <h1 className="mr-3 text-5xl text-slate-800 font-semibold">PDF&apos;e Soru Sor</h1>
          <UserButton/>
          </div>
          <div className="flex mt-2">
            {isAuth &&  <Button>Sohbete Başla </Button> }
         
            </div>
            <p className="max-w-xl mt-1 text-lg text-slate-700">
            Join millions of students, researchers and professionals to instantly
            answer questions and understand research with AI
          </p>

          <div className="w-full mt-4">
            {!isAuth &&
               
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            }
          </div>
          
      </div>
    </div>

   </div>
  );
}
