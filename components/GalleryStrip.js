"use client";

import { useEffect, useState } from "react";
import SiteImage from "@/components/SiteImage";

export default function GalleryStrip({ items }) {
  const [active, setActive] = useState(Math.min(3, items.length - 1));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2600);
    return () => clearInterval(id);
  }, [paused, items.length]);

  return (
    <div
      className="gallery-strip"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {items.map((item, i) => (
        <div
          key={item.src}
          className={`gallery-strip-item${i === active ? " active" : ""}`}
          onMouseEnter={() => setActive(i)}
        >
          <SiteImage src={item.src} alt={item.caption} />
          {i === active ? <div className="gallery-strip-caption">{item.caption}</div> : null}
        </div>
      ))}
    </div>
  );
}