// scrollTop
const scrollerEL = document.querySelector("#scroller");
const output = document.querySelector("#output");

scrollerEL.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scrollerEL.scrollTop}`;
});

// scrollTo
window.scrollTo(0, 0);

// Attribute
const El = "html";
El.getAttribute("type");
El.setAttribute("type", "hahaha");
El.hasAttribute("type");
El.removeAttribute("type");

//Animate
document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  }
);

/*  
clientHeight :38 chiều cao của el, k bao gồm border
clientLeft: 1 độ rộng border
clientTop: 1  độ rộng border
clientWidth: 621 : chiều dài của el, k bao gồm border

offsetHeight :40 chiều cao của el, bao gồm cả border
offsetLeft :50 khoảng cách với lề trái, bao gồm cả margin của chính nó
offsetTop :50 khoảng cách với lề phải, bao gồm cả margin của chính nó 
offsetWidth :603 chiều dài của el, bao gồm cả border



*/
