"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { loginActionHandler } from "../../_actions/loginActionHandler";
import { userStore } from "@/app/_store/userStore";
import { UUID } from "crypto";

function LoginClient() {
  const router = useRouter();
  const link = useSearchParams().get("link");
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const [email, setEmail] = useState<string>("");

  async function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const loginObj = {
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
    };

    setEmail(loginObj.email);

    const { data, errors } = (await loginActionHandler(loginObj)) as {
      data: {
        user: {
          id: UUID;
          name: string;
          email: string;
          phone: string;
        };
        session: {
          access_token: string;
          refresh_token: string;
        };
      };
      errors: Record<string, string> | null;
    };

    if (errors) {
      console.error(errors);
      console.log(loginObj)
      setErrors(errors);
      return;
    }

    setErrors(null);

    // ✅ Update Zustand store
    userStore
      .getState()
      .signin(
        data.user.id,
        data.user.name,
        data.user.email,
        data.user.phone,
        data.session.access_token,
        data.session.refresh_token
      );
      const url = link ? `/clip/${link}?id=${data.user.id}` : '/user/dashboard';
    router.push(url);
  }

  return (
    <form onSubmit={handleLoginSubmit} className="flex flex-col w-full gap-2 items-center">
      <input
        type="text"
        name="email"
        id="email"
        defaultValue={email}
        placeholder="Email"
        className="outline-1 p-2 rounded w-[85%]"
      />
      {errors?.email && <p className="text-red-600">{errors.email}</p>}

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="outline-1 p-2 rounded w-[85%]"
      />
      <Button type="submit">Submit</Button>

      {errors && (
        <p className="text-red-600 bg-red-100 outline outline-red-600 px-6 py-2 rounded-sm mt-2">
          {Object.values(errors)[0]}
        </p>
      )}
    </form>
  );
}

export default LoginClient;
