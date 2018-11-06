(function () {
  var row = document.querySelector('main > div');
  var buttons = document.querySelectorAll('button');

  row.addEventListener('click', handleEvent);

  function handleEvent (event) {
    if (event.target === buttons[0]){
      event.target.classList.toggle('button-danger');
    }
    if (event.target === buttons[1]){
      event.target.innerText = 'you clicked me'
    }
    if (event.target === buttons[2]){
      buttons[1].innerText = 'button two'
    }
  }

})();
