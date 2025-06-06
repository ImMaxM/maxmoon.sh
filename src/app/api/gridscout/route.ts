import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://gridscout.xyz/api/discord", {
      cache: "no-store", // no cache
    });

    if (!response.ok) {
      throw new Error("Failed to fetch server count");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching server count:", error);
    return NextResponse.json(
      { error: "Failed to fetch server count" },
      { status: 500 },
    );
  }
}
