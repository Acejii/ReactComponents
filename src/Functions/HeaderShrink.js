import React, { useRef, useEffect } from "react";

const HeaderShrink = () => {
  const headerRef = useRef();

  useEffect(() => {
    const handleShrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef?.current?.classList.add("shrink");
      } else {
        headerRef?.current?.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleShrink);

    return () => {
      window.removeEventListener("scroll", handleShrink);
    };
  }, []);

  return <div ref={headerRef}>Header</div>;
};

export default HeaderShrink;
