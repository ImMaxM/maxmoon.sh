"use client";

import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/music",
    name: "Music",
  },
  {
    path: "/shoutbox",
    name: "Shoutbox",
  },
];

function NavbarElement({
  item,
  highlightDivRef,
  isActive,
  children,
}: {
  highlightDivRef: RefObject<HTMLDivElement>;
  isActive: boolean;
  children: ReactNode;
  item: (typeof navItems)[number];
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function resetToActive() {
    const boundingBox = document.querySelector(
      "a[data-active=true]"
    ) as HTMLDivElement | null;

    if (boundingBox) {
      highlightDivRef.current!.style.left = boundingBox.offsetLeft + "px";
      highlightDivRef.current!.style.width = boundingBox.offsetWidth + "px";
    }
  }

  useEffect(() => {
    resetToActive();
  }, [isActive]);

  return (
    <Link
      ref={ref}
      key={item.path}
      className={`px-4 py-2 rounded-md text-sm lg:text-base no-underline duration-300 box-border ease-in ${
        isActive ? "text-white" : "text-secondary"
      }`}
      data-active={isActive}
      href={item.path}
      onMouseOver={(ev) => {
        highlightDivRef.current!.style.left = ref.current!.offsetLeft + "px";
        highlightDivRef.current!.style.width = ref.current!.offsetWidth + "px";
      }}
      onMouseLeave={() => {
        resetToActive();
      }}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  let pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const highlightDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-box border-2 p-[0.4rem] rounded-lg mb-12 z-[100] bg-transparent backdrop-blur-lg min-w-screen">
      <nav className="flex gap-8 relative justify-start w-full z-[100] rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          return (
            <NavbarElement
              highlightDivRef={highlightDivRef}
              isActive={isActive}
              item={item}
              key={index}
            >
              <span>{item.name}</span>
            </NavbarElement>
          );
        })}

        <div
          className="absolute bottom-0 left-0 h-full bg-selected rounded-md -z-10 transition-all duration-300"
          aria-hidden="true"
          ref={highlightDivRef}
        ></div>
      </nav>
    </div>
  );
}
