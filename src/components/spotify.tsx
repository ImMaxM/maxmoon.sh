"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Spotify, useLanyardWS } from "use-lanyard";

const userId = "866686984587313173";

const Spotify = () => {
  const [spotifyData, setSpotifyData] = useState<Spotify | null>(null);

  const data = useLanyardWS(userId);

  useEffect(() => {
    if (data?.spotify) {
      setSpotifyData(data.spotify);
    }
  }, [data]);

  console.log(spotifyData);

  return (
    <div>
      {spotifyData ? (
        <div>
          <p>
            {spotifyData.song}; {spotifyData.artist}
          </p>
        </div>
      ) : (
        <p>Loading spotify song data...</p>
      )}
    </div>
  );
};

export default Spotify;
