const menu = function () {
  const burger = document.querySelector(".menu-button");
  const l1 = document.querySelector(".l1");
  const l2 = document.querySelector(".l2");
  const l3 = document.querySelector(".l3");
  const nav = document.querySelector("nav");
  const list = document.querySelector(".nav-list");
  let flag = 0;

  const logocolor = function (color) {
    document.querySelector("logo").style.fill = "color";
  };
  burger.addEventListener("click", function () {
    if (flag === 0) {
      l2.classList.toggle("l2-active");
      l3.classList.toggle("l3-active");
      document.querySelector(".nav-list").style.display = "flex";
      nav.classList.toggle("nav-active");
      flag = 1;
    } else if (flag === 1) {
      l2.classList.remove("l2-active");
      l3.classList.remove("l3-active");
      nav.classList.remove("nav-active");
      document.querySelector(".nav-list").style.display = "none";
      flag = 0;
    }
  });
  list.addEventListener("click", function () {
    l2.classList.remove("l2-active");
    l3.classList.remove("l3-active");
    nav.classList.remove("nav-active");
    document.querySelector(".nav-list").style.display = "none";
  });
};
menu();
