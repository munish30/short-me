"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

function Login({ loggedIn }: Readonly<{ loggedIn: boolean }>) {
  return (
    <div>
      {!loggedIn ? (
        <div>
          <div className="hidden sm:flex gap-5">
            <Button size={"lg"}>
              <Link href={'/auth/login'}>Login</Link>
            </Button>
            <Button size={"lg"}>
              <Link href={'/auth/signup'}>Signup</Link>
            </Button>
          </div>
          <div className="block sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="bg-transparent focus:ring-0 hover:bg-none focus:outline-none focus:not-open:outline-0 shadow-none">
                  <Bars3Icon className="size-9 hover:bg-none mt-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-5">
                <DropdownMenuItem>
                  <Link href={'/auth/signup'}>Signup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/auth/login'}>Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="focus:ring-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/user/profile'}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/user/billing'}>Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/user/dashboard'}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-500"
              >
                <Link href={'/auth/logout'}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}

export default Login;
