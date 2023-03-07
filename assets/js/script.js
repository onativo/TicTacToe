let x = document.getElementsByClassName('x')
let o = document.getElementsByClassName('o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.getElementById('message')
let messageText = document.querySelector('#message p')
let secondPlayer

//inicia com zero pontos
let playerOne = 0
let playerTwo = 0

//evento de clique nos boxes
for(let i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('click', function () {
    let player = checkPlayer(playerOne, playerTwo)

    //verifica se já tem x ou cícrulo
    if(this.childNodes.length == 0){
      let clonePlayer = player[0].cloneNode(true)
      this.appendChild(clonePlayer)
  
      //ordem de jogadas
      if(playerOne == playerTwo){
        playerOne ++
        if(secondPlayer == 'bot'){
          botPlayer()
          playerTwo++
        }
      }else{
        playerTwo ++
      }
    }

  checkWinner()

  })
}

//evento para escolher jogadores ou ia
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    secondPlayer = this.getAttribute('id')

    for(let j = 0; j < buttons.length; j++){
      buttons[j].style.display = 'none'
    }
    setTimeout(function(){
      let container = document.querySelector('#container')
      container.classList.remove('hide')
    }, 200)
  })
}

//função que seleciona o jogador
function checkPlayer(playerOne, playerTwo){
  if(playerOne == playerTwo){
    player = x
  }else{
   player = o
  }
  return player
}

//função que checa o ganhador
function checkWinner(){
  let b1 = document.getElementById('block1')
  let b2 = document.getElementById('block2')
  let b3 = document.getElementById('block3')
  let b4 = document.getElementById('block4')
  let b5 = document.getElementById('block5')
  let b6 = document.getElementById('block6')
  let b7 = document.getElementById('block7')
  let b8 = document.getElementById('block8')
  let b9 = document.getElementById('block9')

  //verifica condição de vitória da primeira linha
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className
    let b2Child = b2.childNodes[0].className
    let b3Child = b3.childNodes[0].className

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
      setWinner('x')
    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
      setWinner('o')
    }
  }

  //verifica condição de vitória da segunda linha
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
    let b4Child = b4.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b6Child = b6.childNodes[0].className

    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
      setWinner('x')
    }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
      setWinner('o')
    }
  }

  //verifica condição de vitória da terceira linha
  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className
    let b8Child = b8.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
      setWinner('x')
    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
      setWinner('o')
    }
  }

  //verifica vitória na vertical
  //verifica condição de vitória da primeira coluna
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className
    let b4Child = b4.childNodes[0].className
    let b7Child = b7.childNodes[0].className

    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
      setWinner('x')
    }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
      setWinner('o')
    }
  }

  //verifica condição de vitória da segunda coluna
  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
    let b2Child = b2.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b8Child = b8.childNodes[0].className

    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
      setWinner('x')
    }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
      setWinner('o')
    }
  }

  //verifica condição de vitória da terceira coluna
  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className
    let b6Child = b6.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
      setWinner('x')
    }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
      setWinner('o')
    }
  }
  
    
  //verifica vitória na diagonal
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
      setWinner('x')
    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
      setWinner('o')
    }
  }
  //verifica condição de vitória da terceira coluna
  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b7Child = b7.childNodes[0].className

    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
      setWinner('x')
    }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
      setWinner('o')
    }
  }
    //situação de empate
  let count = 0

  for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined){
      count++
    }
  }
  if(count == 9){
    setWinner('empate')
  }
}


//limpa o jogo e atualiza o placar
function setWinner(winner){
  let scoreX = document.querySelector('#start-score-x')
  let scoreO = document.querySelector('#start-score-o')
  let msg = ''

  if(winner == 'x'){
    scoreX.textContent =  parseInt(scoreX.textContent) + 1
    msg = 'O jogador X venceu!!!'
  }else if(winner == 'o'){
    scoreO.textContent =  parseInt(scoreO.textContent) + 1
    msg = 'O jogador O venceu!!!'
  }else if(winner = 'empate'){
    msg = 'Deu empate :/'
  }

  //exibe a mensagem na tela
  messageText.innerHTML = msg
  messageContainer.classList.remove('hide')

  //esconde mensagem de vitória/empate
  setTimeout(function() {
    messageContainer.classList.add('hide');
  }, 1500)

  //zera as jogadas
  playerOne = 0
  playerTwo = 0

  let boxesToRemove = document.querySelectorAll('.box div')

  for(let i = 0; i < boxesToRemove.length; i++){
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
  }

}

function botPlayer(){
  let cloneO = o[0].cloneNode(true)

  count = 0
  filled = 0

  for(let i = 0; i < boxes.length; i++){
    let randNumber = Math.floor(Math.random() * 5)
    //só preenche div se estiver vazia
    if(boxes[i].childNodes[0] == undefined){
      if(randNumber <= 1){
        boxes[i].appendChild(cloneO)
        count++
        break
      }
    }
    //checa quantas estão preenchidas
    else{
      filled++
    }
  }
  if(count == 0 && filled < 9){
    botPlayer()
  }
}