function toggleMenu() {
  const menu = document.getElementById("nav-links");
  const icon = document.getElementById("hamburger-icon")
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}