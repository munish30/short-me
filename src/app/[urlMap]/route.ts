import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ urlMap: string }> }
) {
  const { urlMap } = await params;
  const supabase = await createClient();
  console.log(urlMap);
  const { data, error } = await supabase.from("urls").select("*").eq("id", urlMap);
  if (error || data.length === 0) {
    redirect("/not-found");
  } else {
    console.log(data);
    redirect(data[0].url);
  }
}
