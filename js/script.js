//Enredo do Jogo

function intro() {
  var text = document.getElementById('player-text')
  var act = document.getElementById('game-container')

  act.classList.add("act");
  text.innerHTML = "<p>Ato 1</p>" + "<p>...........................</p>";
}

intro();

setTimeout(function () {
  var text = document.getElementById('player-text')
  var act = document.getElementById('game-container')

  act.classList.remove("act");
  text.innerHTML = "";
}, 5000);