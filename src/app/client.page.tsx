"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { userStore } from "./_store/userStore";

export default function HomeClient() {
  const {isLoggedIn, userId} = userStore();
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const [urlValidState, setUrlValidState] = useState<boolean>(false);


  function handleGetStarted() {
    const isUrlValid = url.match(
      /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.(com|in|pk|io|sh|net|org|co|edu|gov|info|biz|me|us|uk|ca|de|jp|au|fr|ru|ch|it|nl|se|no|es|mil|xyz|site|online|tech)\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
    );

    if (!isUrlValid) {
      setUrlValidState(true);
      return;
    }
    if (!isLoggedIn()) {
      router.push(`/auth/signup?link=${url}`);
    }
    else {
      router.push(`/clip/${url}?id=${userId}`);
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 w-[85%] text-lg sm:text-xl mb-4">
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          placeholder="Enter the url to be shortened..."
          className="w-full focus:ring-0 p-3 outline-1 rounded-lg"
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button
          className="bg-gradient-to-tl from-violet-500 to-rose-300 text-lg p-6 px-5"
          variant={"secondary"}
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </div>
      {urlValidState && (
        <div className="flex gap-1 items-center py-1 px-2 text-red-600 bg-red-200 rounded">
          <ExclamationCircleIcon className="size-5" />
          <small>Invalid URL</small>
        </div>
      )}
    </>
  );
}
