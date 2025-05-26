"use client";

import { userStore } from "@/app/_store/userStore";
import React from "react";

function UserProfilePage() {
  const { name, email, phone, isLoggedIn } = userStore();

  if (!isLoggedIn()) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full text-center text-xl p-5">
        <p className="text-gray-700">You&rsquo;re not logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 text-lg w-[90%] sm:w-[75%] bg-white text-black h-fit rounded-xl shadow-lg p-6 mt-10">
      <h1 className="text-3xl font-bold border-b pb-2 mb-4">Your Profile</h1>

      <div className="flex flex-col justify-end w-full pl-[10%] items-start gap-4">
        <div className="flex flex-col gap-1 sm:gap-0">
          <h2 className="font-semibold">Name</h2>
          <p>{name ?? "Not provided"}</p>
        </div>

        <div className="flex flex-col gap-1 sm:gap-0">
          <h2 className="font-semibold">Email</h2>
          <p>{email}</p>
        </div>

        <div className="flex flex-col gap-1 sm:gap-0">
          <h2 className="font-semibold">Phone</h2>
          <p>{phone || "Not provided"}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
