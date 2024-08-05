import Image from "next/image";
import banner from "../../../public/images/banner.png";
import avatar from "../../../public/images/avatar.png";
import Spotify from "./Spotify";

interface HeroProps {
  isVisible: boolean;
  delay: number;
}

export default function Hero({ isVisible, delay }: HeroProps) {
  return (
    <div
      className={`relative mb-8 h-[64px] opacity-0 md:h-[256px] ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={banner}
        height={256}
        alt="Space Pixel Art Banner Image"
        className="hidden rounded-3xl md:block"
        priority
      />
      <Image
        src={avatar}
        height={122}
        width={122}
        alt="Space Man Avatar"
        className="absolute left-6 rounded-full border-[6px] border-background md:-bottom-16"
      />
      <div className="absolute right-2 hidden pr-6 pt-4 md:block">
        <Spotify />
      </div>
    </div>
  );
}
