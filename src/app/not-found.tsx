"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-8">
        <div
          className={`text-center opacity-0 ${isLoaded ? "animate-fade-in" : ""}`}
        >
          <h1 className="mb-2 text-6xl font-medium text-primary">404</h1>
          <p className="mb-8 text-secondary">Page not found</p>
          <Link
            href="/"
            className="text-primary underline underline-offset-4 hover:text-secondary"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
