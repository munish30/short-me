"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Login from "./login";
import { userStore } from "@/app/_store/userStore";

function Header() {

  const isLoggedIn = userStore(state => state.isLoggedIn());

  return (
    <nav className="flex justify-between items-center p-4 w-full">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={200} height={30} alt={"Logo"} />
      </Link>

      <div className="flex">
        <Login loggedIn={isLoggedIn} />
      </div>
    </nav>
  );
}

export default Header;
