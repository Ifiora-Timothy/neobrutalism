"use client";
import { PackagePlus, ShirtIcon, ZapIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const FeaturesContainer = (props: Props) => {
  return (
    <div
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
