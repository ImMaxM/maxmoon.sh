import { NextResponse } from "next/server";
import { env } from "~/env.js";

export async function GET() {
  try {
    const username = env.LASTFM_USERNAME;
    const apiKey = env.LASTFM_API_KEY;

    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`,
      {
        cache: "no-store", // no cache
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Last.fm data");
    }

    const data = await response.json();

    if (!data.recenttracks?.track?.[0]) {
      return NextResponse.json(
        { error: "No recent tracks found" },
        { status: 404 },
      );
    }

    const track = data.recenttracks.track[0];

    const songData = {
      name: track.name || "Unknown Track",
      artist: track.artist?.["#text"] || track.artist || "Unknown Artist",
      album: track.album?.["#text"] || null,
      albumArt: track.image[2]["#text"] || null,
      url: track.url,
      isNowPlaying: track["@attr"]?.nowplaying === "true",
    };

    return NextResponse.json(songData);
  } catch (error) {
    console.error("Error fetching Last.fm data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Last.fm data" },
      { status: 500 },
    );
  }
}
