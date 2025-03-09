import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`fixed z-[1000] rounded-full pointer-events-none transition-transform duration-300 ease-in-out ${
        isHovering
          ? "rounded-full w-20 h-20 bg-transparent border border-yellow-500"
          : "w-10 h-10 bg-[#624d33]"
      }`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}