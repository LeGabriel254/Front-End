function toggleMenu(){
  const menu = document.getElementById("menu-links");
  const icon = document.getElementById("hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }