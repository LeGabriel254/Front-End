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
  const got =  document.getElementById('got');
  const close =  document.getElementById('close')
  const secondary = document.getElementById('secondary')
  const project = document.getElementById('project')
// When the user clicks the bookmark button, open the modal
button.onclick = function() {
  support.style.display = "block";
}
//When the user clicks the got, the support closes
got.onclick = function(){
  support.style.display = "none"
}
// when the user clicks the secondary button the projects open
secondary.onclick = function(){
project.style.display ="block"
}
//when the user clicks close(x) the project close
close.onclick = function (){
  project.style.display = "none"
}
// When the user clicks anywhere outside of the support, close it
window.onclick = function(event) {
  if (event.target == support) {
      support.style.display = "none";
  }
}

})
