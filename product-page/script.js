//JavaScript code runs after the html has fullyloaded
document.addEventListener('DOMContentLoaded', function(){
  
  function toggleMenu() {
    const menu = document.getElementById("nav-links");
    const icon = document.getElementById("hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  //DOM Elements
  const button = document.getElementById('bookmark');
  const support = document.getElementById('support');
  const close = document.getElementsByClassName('close');
  const got =  document.getElementById('got');


// When the user clicks the bookmark button, open the modal
button.onclick = function() {
  support.style.display = "block";
}

//When the user clicks the got, the support closes
got.onclick = function(){
  support.style.display = "none"
}

})
