var info = document.getElementById('info');
var infoDialog = document.getElementById('infoDialog');
let whitePieces = document.querySelector("#whitePieces")
let blackPieces = document.querySelector("#blackPieces")

info.addEventListener('click', function onOpen() {
  if (typeof infoDialog.showModal === "function") {
    infoDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

let board = document.querySelector("#board")
let last = document.querySelector("#last")

let chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"]

let boxes = [['1','1','1','1','1','1','1','1','1','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','1','1','1','1','1','1','1','1','1']]

function gettingBoxes() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            boxes[i][j] = document.querySelector("#p" + i.toString() + j.toString())
        }
    }
}


function createBoard() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            let square = document.createElement("div")
            square.setAttribute("id", "p" + i.toString() + j.toString())
            if (i % 2 == 1) {
                if (j % 2 == 1) {
                    square.setAttribute("class", "square white")
                } else {
                    square.setAttribute("class", "square black")
                }
            } else {
                if (j % 2 == 0) {
                    square.setAttribute("class", "square white")
                } else {
                    square.setAttribute("class", "square black")
                }
            }

            board.appendChild(square)

        }
    }
}

function createChessPieces() {
    for (let i = 0; i < 6; i++) {
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        
        div1.setAttribute("id", "white" + i)
        div2.setAttribute("id", "black" + i)
        div1.classList.add("pieceButton")
        div2.classList.add("pieceButton")
        div1.innerHTML = chessPieces[i]
        div2.innerHTML = chessPieces[i + 6]

        whitePieces.appendChild(div1)
        blackPieces.appendChild(div2)
    }
}

createBoard()
gettingBoxes()
createChessPieces()