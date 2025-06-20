function checkScreenSize() {
    
  if (window.innerWidth > 768) {    
      window.alert("Your screen is compatible Rerouting to the web page")
      window.location.href = "../index.html";
    }
  }

  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;