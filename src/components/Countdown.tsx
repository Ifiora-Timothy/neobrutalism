"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const Countdown = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState(10 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="sm:text-5xl w-fit text-lg font-bold bg-black text-white sm:px-6 px-6 py-3 inline-block transform rotate-2 mb-12 border-8 border-red-500">
      {days}d {hours}h {minutes}m {seconds}s LEFT!
    </div>
  );
};

export default Countdown;
