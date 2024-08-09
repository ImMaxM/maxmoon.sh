"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import spotifyDefault from "../../../public/images/spotify.png";

import { Data, useLanyardWS } from "use-lanyard";

const Spotify = () => {
  const userId = "866686984587313173";
  const [data, setData] = useState<Data | null>(null);
  const [timestamps, setTimestamps] = useState({
    fName: "",
    secondsElapsed: 0,
    secondsTotal: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const lanyard = useLanyardWS(userId);

  useEffect(() => {
    if (lanyard) {
      setData(lanyard);
      setIsLoaded(true);
    }
    if (lanyard?.spotify) {
      const currentEpochTimestamp = new Date(lanyard.spotify.timestamps.start);
      const secondsElapsed = Math.floor(
        (Date.now() - currentEpochTimestamp.getTime()) / 1000,
      );

      const sData = {
        fName:
          (lanyard.spotify.song + "; " + lanyard.spotify.artist).length > 48
            ? (lanyard.spotify.song + "; " + lanyard.spotify.artist).slice(
                0,
                48,
              ) + "..."
            : lanyard.spotify.song + "; " + lanyard.spotify.artist,
        secondsElapsed,
        secondsTotal: Math.floor(
          (lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start) /
            1000,
        ),
      };

      setTimestamps(sData);
    }
  }, [lanyard]);

  useEffect(() => {
    // Update every second
    const intervalId = setInterval(() => {
      if (timestamps.secondsElapsed > timestamps.secondsTotal) {
        setTimestamps((prevTimestamps) => ({
          ...prevTimestamps,
          secondsElapsed: 0,
        }));
      }
      setTimestamps((prevTimestamps) => ({
        ...prevTimestamps,
        secondsElapsed: prevTimestamps.secondsElapsed + 1,
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timestamps]);

  return (
    <div>
      {data?.spotify?.song ? (
        <div
          className={`flex flex-row flex-wrap gap-x-4 ${isLoaded ? "animate-fade-in-small" : "opacity-0"}`}
        >
          <Image
            className="animate-spin-slow rounded-full"
            src={data?.spotify?.album_art_url || spotifyDefault}
            width={40}
            height={40}
            alt="Album Art"
          />
          <div>
            <a
              className="block text-sm"
              href={"https://open.spotify.com/track/" + data.spotify.track_id}
              data-umami-event="Spotify Track"
              data-umami-event-track-id={data.spotify.track_id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {timestamps.fName}
            </a>
            <div className="mt-1 flex min-w-[300px] items-center">
              <span className="mr-2 text-[10px] text-secondary">
                {Math.floor(timestamps.secondsElapsed / 60)}:
                {String(timestamps.secondsElapsed % 60).padStart(2, "0")}
              </span>
              <div className="h-2 flex-1 rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-spotify"
                  style={{
                    width: `${
                      (timestamps.secondsElapsed / timestamps.secondsTotal) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-[10px] text-secondary">
                {Math.floor(timestamps.secondsTotal / 60)}:
                {String(timestamps.secondsTotal % 60).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Spotify;
