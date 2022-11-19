import React from "react";
import data from "../../data";
import { v4 as uuid } from "uuid";
import LazyImage from "./LazyImage";

const ObserverTest = () => {
  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div key={uuid()} style={{ width: "300px", height: "400px" }}>
            <LazyImage
              src={item?.image}
              alt="hinh anh"
              width="100%"
              height="100%"
            />
          </div>
        ))}
    </div>
  );
};

export default ObserverTest;
