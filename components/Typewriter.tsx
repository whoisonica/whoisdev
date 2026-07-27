"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Typing effect cycling through a list of words/phrases: type, pause, delete,
 * move to the next. Under prefers-reduced-motion it renders the first item
 * statically, with no animation.
 */
export function Typewriter({
  words,
  className,
  typeSpeed = 75,
  deleteSpeed = 40,
  pause = 1700,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0] ?? "");
      return;
    }
    const current = words[index % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((v) => (v + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            current.slice(0, deleting ? text.length - 1 : text.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="caret" />
    </span>
  );
}
