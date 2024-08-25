"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

const BackHistory = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      className="sm:text-2xl text-lg py-6 px-8 bg-cyan-400 hover:bg-cyan-500 text-black font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black flex items-center justify-center"
    >
      <ArrowLeftIcon className="mr-2" /> Go Back
    </Button>
  );
};

export default BackHistory;
