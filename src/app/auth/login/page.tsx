import Link from "next/link";
import LoginClient from "./client.page";
import { SideBanner } from "../SideBanner";

function Login() {
  return (
    <div className="flex justify-evenly items-center w-full">
      <div className="bg-white rounded flex flex-col h-100 text-black gap-4 p-3 justify-evenly items-center w-85 sm:w-[80%] md:w-[70%] sm:h-125 mt-10">
        <h1 className="font-bold text-4xl p-2 border-b-2">Login</h1>

        <div className="flex justify-center items-center w-full">
          <SideBanner />
          <LoginClient />
        </div>

        <div className="flex gap-2">
          <p>First time here?</p>
          <Link href="/auth/signup" className="text-blue-700 underline">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
