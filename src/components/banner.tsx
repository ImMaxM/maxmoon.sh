import Image from "next/image";
import React from "react";
import BannerImage from "../../public/banner.png";
import AvatarImage from "../../public/avatar.png";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="rounded-lg"
        src={BannerImage}
        alt="Space Banner"
        quality={100}
        priority={true}
      />
      <Image
        className="absolute bottom-0 left-14 translate-y-1/2 transform rounded-full border-6 border-background"
        src={AvatarImage}
        alt="Avatar"
        width={140}
        priority={true}
      />
    </div>
  );
};

export default Banner;
