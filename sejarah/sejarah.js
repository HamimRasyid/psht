// togel class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

const more = document.getElementById("more");
const lengkap = document.getElementById("lengkap");
const buka = document.getElementById("buka");
const tutup = document.getElementById("tutup");
const iya = document.getElementById("iya");
const tidak = document.getElementById("tidak");
lengkap.addEventListener("click", function () {
  if (more.style.display === "none") {
    more.style.display = "block";
    lengkap.textContent = "Baca Lebih Sedikit";
  } else {
    more.style.display = "none";
    lengkap.textContent = "Baca Selengkapnnya...";
  }
});
tutup.addEventListener("click", function () {
  if (buka.style.display === "none") {
    buka.style.display = "block";
    tutup.textContent = "Baca Lebih Sedikit";
  } else {
    buka.style.display = "none";
    tutup.textContent = "Baca Selengkapnnya...";
  }
});
tidak.addEventListener("click", function () {
  if (iya.style.display === "none") {
    iya.style.display = "block";
    tidak.textContent = "Baca Lebih Sedikit";
  } else {
    iya.style.display = "none";
    tidak.textContent = "Baca Selengkapnnya...";
  }
});
