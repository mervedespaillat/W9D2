import Game from "../ttt_node/game.js"
import View from "./ttt-view.js"

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();  // has our game's logic
  const element = document.querySelector(".ttt"); // this element is the visual for our game
  const view = new View(game, element);
});
