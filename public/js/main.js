(function () {
      var buttons = document.querySelectorAll('button')

      buttons[0].addEventListener('click', function () {
        buttons[0].classList.toggle('button-danger');
      })
      buttons[1].addEventListener('click', changeText);

      function changeText() {
        buttons[1].innerText = 'you click me';
      }
      buttons[2].addEventListener('click', changeBack);

      function changeBack() {
        buttons[1].innerText = 'button two';
      }

})();
