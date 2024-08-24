"use client";
import React, { RefObject, useEffect } from "react";

type Props = {
  ref: RefObject<HTMLElement>;
  parent: RefObject<HTMLElement>;

  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void;
};

const useClickOutside = ({ ref, parent, handleOnClickOutside }: Props) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handleOnClickOutside(event);
    };
    parent.current?.addEventListener("mousedown", listener);
    parent.current?.addEventListener("touchstart", listener);

    return () => {
      parent.current?.removeEventListener("mousedown", listener);
      parent.current?.removeEventListener("touchstart", listener);
    };
  }, [ref, parent, handleOnClickOutside]);

  return <div>useClickOutside</div>;
};

export default useClickOutside;
