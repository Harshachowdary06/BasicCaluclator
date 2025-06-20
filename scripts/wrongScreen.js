function checkScreenSize() {
    if (window.innerWidth < 768) {
      window.location.href = "assets/notCompaitable.html";
    }
  }

  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;