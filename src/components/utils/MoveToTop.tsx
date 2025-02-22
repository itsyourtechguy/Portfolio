import { useEffect } from "react";

const MoveToTop = ({ activeSection }: { activeSection: string }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeSection]);

  return null;
};

export default MoveToTop;