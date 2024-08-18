import { useEffect, useState } from "react";

const breakpoint = 1074;
const query = window.matchMedia(`(min-width: ${breakpoint}px)`);

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const queryHandler = () => {
      if (query.matches) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    queryHandler();

    query.addEventListener("change", queryHandler);
    return () => {
      query.removeEventListener("change", queryHandler);
    };
  }, []);

  return { isMobile };
};
