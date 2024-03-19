"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import spotifyDefault from "../../public/spotify.png";

import { Data, useLanyardWS } from "use-lanyard";

const Spotify = () => {
  const userId = "866686984587313173";
  const [data, setData] = useState<Data | null>(null);
  const [timestamps, setTimestamps] = useState({
    fName: "",
    secondsElapsed: 0,
    secondsTotal: 0,
  });

  const lanyard = useLanyardWS(userId);

  useEffect(() => {
    if (lanyard) {
      setData(lanyard);
    }
    if (lanyard?.spotify) {
      const currentEpochTimestamp = new Date(lanyard.spotify.timestamps.start);
      const secondsElapsed = Math.floor(
        (Date.now() - currentEpochTimestamp.getTime()) / 1000
      );

      const sData = {
        fName:
          (lanyard.spotify.song + "; " + lanyard.spotify.artist).length > 48
            ? (lanyard.spotify.song + "; " + lanyard.spotify.artist).slice(
                0,
                48
              ) + "..."
            : lanyard.spotify.song + "; " + lanyard.spotify.artist,
        secondsElapsed,
        secondsTotal: Math.floor(
          (lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start) /
            1000
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
  }, []);

  return (
    <div>
      {data?.spotify?.song ? (
        <div className="flex flex-row flex-wrap gap-x-4">
          <Image
            className="rounded-full animate-spin-slow"
            src={data?.spotify?.album_art_url || spotifyDefault}
            width={48}
            height={48}
            alt="Album Art"
          />
          <div>
            <a
              className="block"
              href={"https://open.spotify.com/track/" + data.spotify.track_id}
              data-umami-event="Spotify Track"
              data-umami-event-track-id={data.spotify.track_id}
              target="_blank"
            >
              {timestamps.fName}{" "}
            </a>
            <div className="flex items-center mt-2 min-w-[300px]">
              <span className="mr-2 text-secondary text-xs">
                {" "}
                {Math.floor(timestamps.secondsElapsed / 60)}:
                {String(timestamps.secondsElapsed % 60).padStart(2, "0")}
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (timestamps.secondsElapsed / timestamps.secondsTotal) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-secondary text-xs">
                {Math.floor(timestamps.secondsTotal / 60)}:
                {String(timestamps.secondsTotal % 60).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-secondary pt-2">Not listening to anything...</p>
      )}
    </div>
  );
};

export default Spotify;
