"use client";
import { Children, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAos = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
};

export default useAos;
