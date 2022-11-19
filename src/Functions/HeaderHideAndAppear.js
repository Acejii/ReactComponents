import React, { useEffect } from "react";

const HeaderHideAndAppear = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    console.log(header.getBoundingClientRect());
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (prevScrollpos > currentScrollPos) {
          header.classList.remove("hide");
        } else {
          header.classList.add("hide");
        }
      } else {
        header.classList.remove("hide");
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      id="header"
      className="header"
      style={{ padding: "10px 10px", border: "1px solid" }}
    >
      Header
    </div>
  );
};

export default HeaderHideAndAppear;
