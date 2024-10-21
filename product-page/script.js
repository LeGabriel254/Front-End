

//JavaScript code runs after the html has fullyloaded

document.addEventListener('DOMContentLoaded', () => {
  
  //DOM Elements
  const button = document.getElementById('conti');
  const support = document.getElementById('support');
  const got = document.getElementById('got');
  const close = document.getElementById('close')
  const secondary = document.getElementById('secondary')
  const project = document.getElementById('project')
  const succefully= document.getElementById('continue')
  const hold = document.getElementById('holder')
  // const container = document.getElementById('container')

  function toggleMenu() {

    const menu = document.getElementById("nav-links");
    const icon = document.getElementById("hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");

  }

  function handleModalAction(modalClass, action) {

    if (action === 'open') {
   
      document.body.classList.add('lock-scroll')
      modalClass.open = true;
    } else {
      modalClass.open = false
      document.body.classList.remove('lock-scroll')
    }
    
  }
  
  // When the user clicks the bookmark button, open the modal
  succefully.onclick = () => {
    handleModalAction(support, 'open')
  }

  button.onclick = () => {
    handleModalAction(support, 'open')
  }
  //When the user clicks the got, the support closes
  got.onclick = () => {
    handleModalAction(support, 'close')
    setTimeout( () => {
      location.reload(); // Reload the page to start fresh
  }, 2000); // Waits for 2 seconds before reloading
  }
 
  // support.onmouseleave = function () {
  //   handleModalAction(support, 'close')
  // }

  // when the user clicks the secondary button the projects open
  secondary.onclick = () => {
    handleModalAction(project, 'open')
  }
  
  //when the user clicks close(x) the project close
  close.onclick = () => {
    handleModalAction( project, 'close')
  }

  window.onmousedown = () => {
    handleModalAction(support, 'close')
  }

})
