function checkScreenSize() {
    
  if (window.innerWidth > 700 ||  window.innerHeight > 400) {    
      window.location.href = "../index.html";
    }
  }

  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;