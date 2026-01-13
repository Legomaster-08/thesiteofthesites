// ---------- Navbar Toggle ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.addEventListener('DOMContentLoaded', function() {
  var url = "images/site1.jpg";
  document.body.style.backgroundImage = "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.6)), url('" + url + "')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundColor = "#0a0a0a";
});
