"use client";
import { useEffect, useState } from "react";
import MobileMagicOne from "./MobileMagicOne";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHideFooter(false);
      } else {
        setHideFooter(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("lastScrollY :", lastScrollY);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed bottom-0 w-full   outline-1 bg-amber-200">
      {hideFooter && <MobileMagicOne />}
    </div>
  );
};
export default Footer;
