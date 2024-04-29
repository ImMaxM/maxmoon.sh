import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-[900px] z-20">
      <div className="align-middle flex flex-col items-center justify-center gap-8 text-white z-10 pt-64">
        <h1 className="font-bold flex items-center gap-6 text-white">
          <span className="text-8xl">4</span>
          <span className="text-8xl">🌘</span>
          <span className="text-8xl">4</span>
        </h1>
        <p className="text-xl pt-6 text-secondary text-bold">
          The requested page could not be found!
        </p>
        <Link href="/">
          <p className="text-base text-secondary">
            Click <span className="text-accent">here</span> to go back home
          </p>
        </Link>
      </div>
    </div>
  );
}
