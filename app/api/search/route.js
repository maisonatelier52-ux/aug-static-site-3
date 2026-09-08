import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/search";

export async function GET(req) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const results = searchArticles(q);
  return NextResponse.json({ results });
}