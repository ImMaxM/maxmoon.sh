import Image from "next/image";
import React from "react";
import BannerImage from "../../public/banner.png";
import AvatarImage from "../../public/avatar.png";
import Spotify from "./spotify";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="rounded-lg hidden md:block"
        src={BannerImage}
        alt="Space Banner"
        quality={100}
        priority={true}
      />
      <Image
        className="md:absolute bottom-0 left-14 md:translate-y-1/2 transform rounded-full border-6 border-background"
        src={AvatarImage}
        alt="Avatar"
        width={140}
        priority={true}
      />
      <div className="absolute hidden md:block right-2 pr-6 pt-4">
        <Spotify />
      </div>
    </div>
  );
};

export default Banner;
