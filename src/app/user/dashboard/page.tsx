"use client";

import { useEffect, useState } from "react";
import { userStore } from "@/app/_store/userStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [urls, setUrls] = useState<Record<string, any>[] | null>(null);
  const { userId } = userStore();

  useEffect(() => {
    const fetchUrls = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("urls").select("*").eq("user_id", userId);
      setUrls(data);
      console.log(data);
    };
    fetchUrls();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-[90%] sm:w-[75%] bg-white text-black h-fit rounded-xl shadow-lg p-6 mt-10 text-xl">
      <Table>
        <TableCaption>List of URLs in your account</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Short URL</TableHead>
            <TableHead>Original URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls?.map((mapping) => (
            <TableRow key={mapping.id}>
              <TableCell>
                <Link href={`dashboard/${mapping.id}`} className="underline">
                  {`${mapping.id}`}
                </Link>
              </TableCell>
              <TableCell>{mapping.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button size="lg">
        <Link href={"/"}>Create New +</Link>
      </Button>
    </div>
  );
}
