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
var lastPiece = []
let lastID

let chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"]
let notation = ["K", "Q", "R", "B", "N", "P", "k", "q", "r", "b", "n", "p"]

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

let infoPieces = [['1','1','1','1','1','1','1','1','1','1'],
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
        
        div1.setAttribute("id", "w" + i)
        div2.setAttribute("id", "b" + (i + 6))
        div1.classList.add("pieceButton")
        div2.classList.add("pieceButton")
        div1.innerHTML = chessPieces[i]
        div2.innerHTML = chessPieces[i + 6]

        whitePieces.appendChild(div1)
        blackPieces.appendChild(div2)
    }
}

function button() {
    let buttons = document.querySelectorAll (".pieceButton")
    buttons.forEach(button => button.addEventListener("click", function() {
        if (lastPiece.length !== 0) {
            let last = lastPiece.pop()
            if (last !== button) {
                last.classList.remove("border", "pieceButton2")
                last.classList.add("pieceButton")
            }
            
        }
        
        if (button.classList.contains("border")) {
            button.classList.remove("border", "pieceButton2")
            button.classList.add("pieceButton")
            lastID = ""
        } else {
            button.classList.add("border", "pieceButton2")
            button.classList.remove("pieceButton")
            lastPiece.push(button)
            lastID = button.id
        }
        
        
    }))
}

let fen = ""
let input = document.querySelector("#input")

function changeFEN() {
    let count = 0
    fen = ""
    for (let x = 1; x <= 8; x++) {
        count = 0
        for (let y = 1; y <= 9; y++) {
            if (y === 9) {
                if (count !== 0) {
                    fen += count.toString()
                }
                fen += "/"
            } else if (infoPieces[x][y] === "0") {
                count++
            } else {
                if (count !== 0) {
                    fen += count.toString()
                }
                count = 0
                fen += infoPieces[x][y]
            }
        }
    }
    input.setAttribute("value", fen)
}

function putPiece() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(s => s.addEventListener("click", function() {
        let chessID
        if (lastID !== "") {
            if (lastID.length === 3) {
                chessID = lastID[1] + lastID[2]
            } else {
                chessID = lastID[1]
            }
            if(s.innerHTML !== chessPieces[chessID]) {
                s.innerHTML = chessPieces[chessID]
                infoPieces[s.id[1]][s.id[2]] = notation[chessID]
            } else {
                s.innerHTML = ""
                infoPieces[s.id[1]][s.id[2]] = "0"
            }
        }
        changeFEN()
    }))
}

function clear() {
    document.querySelector("#clear").addEventListener("click", function() {
        console.log("ok")
        infoPieces = [['1','1','1','1','1','1','1','1','1','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','0','0','0','0','0','0','0','0','1'],
        ['1','1','1','1','1','1','1','1','1','1']]
        let squares = document.querySelectorAll(".square")
        squares.forEach(s => s.innerHTML = "")
    })
}

createBoard()
gettingBoxes()
createChessPieces()
clear()
button()
putPiece()
