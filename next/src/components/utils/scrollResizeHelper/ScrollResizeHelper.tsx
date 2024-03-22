"use client";

import { useEffect } from "react";
import styles from "./scrollResizeHelper.module.scss";

export const ScrollResizeHelper = () => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      document.body.classList.add(styles._scrolled);
    } else {
      document.body.classList.remove(styles._scrolled);
    }
  };

  const handleResize = () => {
    if (!document.body.classList.contains(styles._resizing)) {
      document.body.classList.add(styles._resizing);

      setTimeout(() => {
        document.body.classList.remove(styles._resizing);
      }, 1000);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <></>;
};
