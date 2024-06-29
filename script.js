let user = "";
let computer = "";
let desc = "";

function randomCom() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "scissors";
      break;
    case 1:
      return "rock";
      break;
    default:
      return "paper";
  }
}

function checkWinner(user, computer) {
  if (user == computer) return "Seri";
  if (user == "rock") return computer == "scissors" ? "Menang" : "Kalah";
  if (user == "paper") return computer == "rock" ? "Menang" : "Kalah";
  if (user == "scissors") return computer == "paper" ? "Menang" : "Kalah";
}

function userClick(value) {
  user = value;
  document.getElementById("user").setAttribute("src", "assets/" + user + ".png");
  computer = randomCom();
  document.getElementById("computer").setAttribute("src", "assets/" + computer + ".png");
  desc = checkWinner(user, computer);
  document.getElementById("description").innerText = desc;
}
