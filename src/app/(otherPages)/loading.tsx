"use client";

import React, { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";

export default function NeoBrutalistLoader() {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-yellow-400 z-50">
      <div className="bg-white border-8 border-black p-8 shadow-[16px_16px_0_0_#000] transform -rotate-2 max-w-md w-full">
        <h1 className="text-4xl font-black mb-4 uppercase text-center">
          {loadingText}
        </h1>
        <div className="flex justify-center mb-4">
          <Loader2Icon className="w-16 h-16 animate-spin text-black" />
        </div>
        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black animate-loading-bar"></div>
        </div>
        <p className="mt-4 text-xl font-bold text-center uppercase">
          Preparing Your Festival Experience
        </p>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
