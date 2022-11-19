import React, { useRef } from "react";

const ScrollIntoView = () => {
  const view = useRef();
  const handleScroll = () => {
    view.current.scrollIntoView();
  };
  return (
    <>
      <button onClick={handleScroll}>click</button>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        consequatur laboriosam eaque recusandae ad consectetur placeat
        reiciendis autem est quisquam esse perferendis soluta sint repellat
        facilis iste, necessitatibus molestiae ratione commodi voluptas sit.
        Error tempora ea, esse repudiandae fugiat accusamus distinctio? Corporis
        aut ducimus voluptate voluptatibus itaque iste beatae repudiandae?
        josidjasd Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facere nobis magni nisi suscipit asperiores eveniet sequi praesentium
        accusamus voluptas labore, doloribus provident unde inventore, ipsa
        aliquam nostrum. Quam rem voluptatem pariatur nihil fugit! Quam
        repellendus quidem blanditiis, consequuntur architecto numquam sunt quod
        dignissimos explicabo! Dicta veniam neque soluta dolorem molestias.
        <br />
        <br />
        <br />
        <br />
      </p>

      <div className="view" ref={view}>
        Scroll into view
      </div>
    </>
  );
};

export default ScrollIntoView;
