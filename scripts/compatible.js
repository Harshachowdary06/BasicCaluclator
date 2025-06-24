function checkScreenSize() {
    
  if (window.innerWidth > 700 && window.innerWidth > 300) {
      window.location.href = "../index.html";
    }
  }

  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;