"use client";
import { PackagePlus, ShirtIcon, ZapIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const FeaturesContainer = (props: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Scroll speed in pixels per second
  const scrollSpeed: number = 30;

  // State to manage whether scrolling is active or paused
  const [isScrolling, setIsScrolling] = useState<boolean>(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let lastTimestamp: number | null = null;
    console.log("container", container, { isScrolling });

    // Auto-scroll function
    const autoScroll = (timestamp: number) => {
      if (!container || !isScrolling) return;

      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      const deltaTime: number = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const distance: number = scrollSpeed * deltaTime;
      container.scrollLeft += distance;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
      animationFrameId.current = requestAnimationFrame(autoScroll);
    };

    if (isScrolling) {
      animationFrameId.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      // Clean up function to prevent memory leaks
    };
  }, [isScrolling]);

  // Event handlers to pause and resume scrolling
  const handleMouseEnter = () => {
    console.log("mouse enter");

    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsScrolling(true);
  };

  return (
    <div
      ref={scrollContainerRef}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        scrollbarWidth: "none",
        // scrollbarGutter: "0",
        // scrollBehavior: "smooth",
      }}
      className="flex px-4  overflow-x-auto gap-4 mb-8"
    >
      <div
        role="button"
        className="flex shrink-0   items-center bg-green-400 px-3  md:p-4 border-4 border-black"
      >
        <PackagePlus className="md:size-8 size-6  mr-2" />
        <span className="text-base font-bold">CUTTING-EDGE INNOVATIONS</span>
      </div>
      <div
        role="button"
        className="flex   shrink-0  items-center bg-purple-500 px-3 py-4 md:p-4 border-4 border-black"
      >
        <ZapIcon className="md:size-8 size-6 mr-2" />
        <span className="text-base font-bold">ELECTRIFYING ATMOSPHERE</span>
      </div>
      <div
        role="button"
        className="flex shrink-0   items-center bg-pink-400 px-3 py-4 md:p-4  border-4 border-black"
      >
        <ShirtIcon className="md:size-8 size-6  mr-2" />
        <span className="text-base font-bold">EXCLUSIVE MERCH</span>
      </div>
    </div>
  );
};

export default FeaturesContainer;
