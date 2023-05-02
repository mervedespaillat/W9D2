class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const unorderedList = document.createElement("ul")
    //const listItem = document.createElement("li")
    const tttNode = document.querySelector(".ttt");
    
    for (let i = 0; i < 3; i++) {
      tttNode.appendChild(unorderedList);
      for (let j = 0; j < 3; j++) {
        let listItem = document.createElement("li")
        unorderedList.appendChild(listItem);
      }
    }
  
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
