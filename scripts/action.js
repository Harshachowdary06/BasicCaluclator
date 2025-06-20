
// Check if there's a return page
const returnUrl = sessionStorage.getItem("returnPage");

// On any user interaction, redirect back
function returnToOriginalPage() {
  if (returnUrl) {
    window.location.href = returnUrl;
  }
}

['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event =>
  window.addEventListener(event, returnToOriginalPage)
);
