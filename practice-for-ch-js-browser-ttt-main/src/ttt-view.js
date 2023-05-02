class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const unorderedList = document.createElement("ul");
    unorderedList.className = "row";
    //const listItem = document.createElement("li")
    this.el.appendChild(unorderedList);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let listItem = document.createElement("li");
        //save the position i,j
        listItem.dataset.pos = JSON.stringify([i,j])
        listItem.className = "col";
        unorderedList.appendChild(listItem);
        listItem.addEventListener( "click", (event) =>{
          event.target.style.backgroundColor = "white"
        } )
      }
    }

  }

  handleClick(e) {
    let ele = e.target // this is the li itself 
    let pos = JSON.parse(ele.dataset.pos)   // this suppose to bring the position in the li
    
    Game.prototype.playMove(pos)



  }

  makeMove(square) {

  }

  handleGameOver() {}
}

export default View;
