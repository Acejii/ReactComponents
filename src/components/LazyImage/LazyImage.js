import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ width, height, src, alt, ...rest }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      style={{
        position: "relative",
        paddingBottom: `${(height / width) * 100}%`,
        width: "100%",
        height: "100%",
      }}
    >
      {inView ? (
        <img
          {...rest}
          alt={alt}
          src={src}
          width={width}
          height={height}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ) : (
        <img
          src="https://cdn.vietnambiz.vn/171464876016439296/2020/4/27/pi-15879821312502129069227.jpg"
          alt="thay the"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
