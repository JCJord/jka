function myFunction(x) {
  x.classList.toggle("change");
}
const servicesBtn = document.querySelector(".servicesBtn");
const partnersBtn = document.querySelector(".partnersBtn");
const footerBtn = document.querySelector(".footerBtn");
const homeBtn = document.querySelector(".homeBtn");

const zapBtn = document.querySelector(".my-float");
const zapFloat = document.querySelector(".float");

function closeZap() {
  zapBtn.classList.add("hidden");
  zapFloat.classList.add("hidden");
}

function returnZap() {
  zapBtn.classList.remove("hidden");
  zapFloat.classList.remove("hidden");
}

function toogleSlideMenu(x) {
  if (x.classList.contains("change")) {
    document.getElementById("mySidenav").style.width = "100%";
    closeZap();

    homeBtn.addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "0px";
      x.classList.remove("change");
    });

    servicesBtn.addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "0px";
      x.classList.remove("change");
    });

    partnersBtn.addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "0px";
      x.classList.remove("change");
    });
    footerBtn.addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "0px";
      x.classList.remove("change");
    });
  } else {
    document.getElementById("mySidenav").style.width = "0px";
    returnZap();
  }
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > 0) {
    document.querySelector(".logo").src = "images/logo.svg";
  } else {
    document.querySelector(".logo").src = "images/logo-white.svg";
  }
});
