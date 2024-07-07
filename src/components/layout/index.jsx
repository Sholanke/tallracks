import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./index.scss";

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    function scrollListener() { setScrollY(window.scrollY / 500); }
    window.addEventListener("scroll", scrollListener);
    return () => { window.removeEventListener("scroll", scrollListener);};
  }, []);

  return (
    <div className="layout">
      <img
        style={{
          opacity: 1 - scrollY,
          transform: `translateY(-${scrollY * 40}px)`,
        }}
        className="layout__header-bg"
        src="/images/header-bg.png"
        alt="header background"
      />
      <Navbar />

      <div className="layout__main">
        <Sidebar />
        <div className="layout__main__content">{children}</div>
      </div>
    </div>
  );
}
