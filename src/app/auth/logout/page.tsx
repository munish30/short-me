"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { userStore } from "@/app/_store/userStore";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    userStore.getState().logout();
    localStorage.clear();
    router.replace("/");
  }, [router]);

  return <></>
}
