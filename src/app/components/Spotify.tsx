"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import spotifyDefault from "../../../public/images/spotify.png";

import { Types, useLanyardWS } from "use-lanyard";

const Spotify = () => {
  const userId = "866686984587313173";
  const [data, setData] = useState<Types.Presence | null>(null);
  const [timestamps, setTimestamps] = useState({
    fName: "",
    secondsElapsed: 0,
    secondsTotal: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [musicSource, setMusicSource] = useState<'spotify' | 'discord' | null>(null);

  const lanyard = useLanyardWS(userId);

  useEffect(() => {
    if (lanyard) {
      setData(lanyard);
      setIsLoaded(true);
    }

    if (lanyard?.spotify) {
      setMusicSource('spotify');
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
    } else {
      const musicActivity = lanyard?.activities?.find(
        (activity) => activity.type === 2 && activity.name === "music"
      );

      if (musicActivity && musicActivity.details && musicActivity.state) {
        setMusicSource('discord');
        const songName = musicActivity.details;
        const artistName = musicActivity.state;
        
        const sData = {
          fName:
            (songName + "; " + artistName).length > 48
              ? (songName + "; " + artistName).slice(0, 48) + "..."
              : songName + "; " + artistName,
          secondsElapsed: 0,
          secondsTotal: 0,
        };

        setTimestamps(sData);
      } else {
        setMusicSource(null);
        setTimestamps({
          fName: "",
          secondsElapsed: 0,
          secondsTotal: 0,
        });
      }
    }
  }, [lanyard]);

  useEffect(() => {
    if (musicSource !== 'spotify') return;

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
  }, [timestamps, musicSource]);

  return (
    <div>
      {(data?.spotify?.song || musicSource === 'discord') ? (
        <div
          className={`flex flex-row flex-wrap gap-x-4 ${isLoaded ? "animate-fade-in-small" : "opacity-0"}`}
        >
          {musicSource === 'spotify' ? (
            <>
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
                  href={"https://open.spotify.com/track/" + data?.spotify?.track_id}
                  data-umami-event="Spotify Track"
                  data-umami-event-track-id={data?.spotify?.track_id}
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
            </>
          ) : (
            <>
              {(() => {
                const musicActivity = data?.activities?.find(
                  (activity) => activity.type === 2 && activity.name === "music"
                );
                return (
                  <>
                    <Image
                      className="animate-spin-slow rounded-full"
                      src={musicActivity?.assets?.large_image?.startsWith('mp:external/') 
                        ? `https://images.discordapp.net/external/${musicActivity.assets.large_image.slice(12)}`
                        : spotifyDefault}
                      width={40}
                      height={40}
                      alt="Album Art"
                    />
                    <div>
                      <span className="block text-sm">
                        {musicActivity?.details || "Unknown Track"}
                      </span>
                      <div className="mt-1 flex min-w-[300px] items-center">
                        <span className="text-[12px] text-secondary">
                          {musicActivity?.state || "Unknown Artist"}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })()}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Spotify;
