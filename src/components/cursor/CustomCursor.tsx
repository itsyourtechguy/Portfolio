import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Hover effect functions
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Attach event listener for cursor movement
    window.addEventListener("mousemove", moveCursor);

    // Attach hover listeners dynamically
    const updateHoverableElements = () => {
      const hoverables = document.querySelectorAll("a, button, .hoverable");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    updateHoverableElements();

    // MutationObserver to detect DOM changes (for dynamic elements like ProjectCard)
    const observer = new MutationObserver(() => updateHoverableElements());
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed z-[1000] rounded-full pointer-events-none transition-transform duration-150 ease-linear ${
        isHovering
          ? "w-20 h-20 border border-yellow-500"
          : "w-10 h-10 bg-[#624d33]"
      }`}
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}
