"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signupActionHandler } from "@/app/_actions/signupActionHandler";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import Link from "next/link";
import { SideBanner } from "../SideBanner";

function SignupClient() {
  const params = useSearchParams();
  const link = params.get("link");
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const signupData = {
      name: formData.get("name")?.toString(),
      email: formData.get("email")?.toString(),
      phone: formData.get("phone")?.toString(),
      password: formData.get("password")?.toString(),
    };

    const { errors } = await signupActionHandler(signupData);
    setErrors(errors);

    if (!errors) {
      setIsDrawerOpen(true);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full">
        <SideBanner />
        <div className="flex flex-col w-full justify-center">
          <form className="flex flex-col w-full gap-2 items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="outline-1 p-2 rounded w-[85%]"
              required
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="outline-1 p-2 rounded w-[85%]"
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number (Optional)"
              className="outline-1 p-2 rounded w-[85%]"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-1 p-2 rounded w-[85%]"
              required
            />
            <Button type="submit">Submit</Button>
          </form>
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Verify Account</DrawerTitle>
                <DrawerDescription>
                  Please verify your account through the email received on the given email address.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button>
                    <Link href={"/auth/login"}>Okay</Link>
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <p>Already in the game?</p>
        <Link
          href={`/auth/login${link ? `?link=${link}` : ""}`}
          className="text-blue-700 underline"
        >
          Login
        </Link>
      </div>
      {errors && (
        <p className="text-red-600 bg-red-200 p-2 px-6 rounded-sm mt-2 w-fit">
          {Object.values(errors)[0]}
        </p>
      )}
    </div>
  );
}

export default SignupClient;
