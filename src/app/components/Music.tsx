"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import DefaultAlbum from "../../../public/images/default-album.png";

interface LastFmTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string | null;
  url: string;
  isNowPlaying: boolean;
}

const Music = () => {
  const [track, setTrack] = useState<LastFmTrack | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch("/api/music");
        if (response.ok) {
          const data = await response.json();
          setTrack(data);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };

    fetchMusic();

    // refresh every 10 seconds
    const interval = setInterval(fetchMusic, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {track ? (
        <div
          className={`flex flex-row flex-wrap gap-x-4 ${isLoaded ? "animate-fade-in-small" : "opacity-0"}`}
        >
          <Image
            className={`animate-spin-slow rounded-full object-cover`}
            src={track.albumArt || DefaultAlbum}
            width={40}
            height={40}
            alt="Album Art"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <a
              className="block text-sm"
              href={track.url}
              data-umami-event="Last.fm Track"
              data-umami-event-track={track.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {track.name}{" "}
              {track.album != track.name && track.album
                ? `- ${track.album}`
                : ""}
            </a>
            <span className="text-[12px] text-secondary">{track.artist}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Music;
