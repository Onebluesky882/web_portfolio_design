"use client";
import { useState } from "react";

export default function Draggable() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={isDragging ? "cursor-grabbing" : "cursor-grab"}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      style={{ userSelect: "none" }}
    >
      Drag me!
    </div>
  );
}
