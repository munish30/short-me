import Link from "next/link";
import SignupClient from "./SignupClient";

function Signup() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="bg-white rounded flex flex-col h-100 text-black gap-4 p-3 justify-evenly items-center w-80 sm:w-[80%] md:w-[70%] sm:h-125 mt-10">
        <h1 className="font-bold text-4xl p-2 border-b-2">Signup</h1>

        <div className="flex justify-center items-center w-full">
          <SignupClient />
        </div>
      </div>
    </div>
  );
}

export default Signup;
