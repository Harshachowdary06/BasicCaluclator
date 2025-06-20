function historyReload(){
    fetch('assets/history.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load file');
      }
      return response.text();
    })
    .then(text => {
      document.getElementById('history').textContent = text;
    })
    .catch(error => {
      document.getElementById('history').textContent = error.message;
    });
}

historyReload()