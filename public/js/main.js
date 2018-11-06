(function () {

  var buttons = document.querySelectorAll('button');

  document.documentElement.addEventListener('click', handleEvent);

  function handleEvent (event) {
    if (event.target === buttons[0]){
      buttons[0].classList.toggle('button-danger');
    }
    if (event.target === buttons[1]){
      buttons[1].innerText = 'you clicked me';
    }
    if (event.target === buttons[2]){
      buttons[1].innerText = 'button two';
    }
  }

})();
