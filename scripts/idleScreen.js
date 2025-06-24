
const idleLimit = 60 * 1000; // 60 seconds

let idleTimer = setTimeout(redirectUser, idleLimit);

function resetTimer() {
clearTimeout(idleTimer);
idleTimer = setTimeout(redirectUser, idleLimit);
}

function redirectUser() {
// Save current page URL
sessionStorage.setItem("returnPage", window.location.href);
window.location.href = "/assets/logo.html"; // Redirect to idle page
}

// Reset on user actions
['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event =>
window.addEventListener(event, resetTimer)
);
