"use client";
import React, { RefObject, useEffect } from "react";

type Props = {
  ref: RefObject<HTMLElement>;
  parent: RefObject<HTMLElement>;

  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void;
};

const useClickOutside = ({ ref, parent, handleOnClickOutside }: Props) => {
  useEffect(() => {
    const currParent = parent.current;
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handleOnClickOutside(event);
    };
    currParent?.addEventListener("mousedown", listener);
    currParent?.addEventListener("touchstart", listener);

    return () => {
      currParent?.removeEventListener("mousedown", listener);
      currParent?.removeEventListener("touchstart", listener);
    };
  }, [ref, parent, handleOnClickOutside]);

  return <div>useClickOutside</div>;
};

export default useClickOutside;
