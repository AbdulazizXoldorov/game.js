
const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const highscore = document.querySelector('.highscore')
const checkBtn = document.querySelector('.check')
const guess = document.querySelector('.guess')
const score = document.querySelector('.score')
const body = document.querySelector('body')
let gameScore = 20
let gameHighscore = 0
let gameOver = false
// let randomNumber = Math.floor(Math.random() * 20 + 1)

let randomNumber = Math.floor(Math.random() * 20 + 1);

console.log(randomNumber);

checkBtn.addEventListener('click' , () => {
  let myNumber = +guess.value
  if(myNumber === randomNumber){
    body.style.background = 'green'
    message.textContent = 'You are win...'
    number.textContent = randomNumber
    gameScore++
    guess.value = ''
    if (gameScore > gameHighscore) {
      gameHighscore = gameScore
      highscore.textContent = gameHighscore
    }
  }else if(myNumber > randomNumber){
    message.textContent = 'To down'
    gameScore--
  }else if(randomNumber > myNumber){
    message.textContent = 'To up'
    gameScore--
  }
  


  score.textContent = gameScore
})



































// checkBtn.addEventListener('click', () => {
//   let myNumber = +guess.value
//   if (myNumber) {
//     if (!gameOver) {
//       if (myNumber === randomNumber) {
//         body.style.backgroundColor = 'green'
//         message.textContent = 'you are win...'
//         number.textContent = randomNumber
//         gameScore++
//         highscore.textContent = gameScore

//         if (gameScore > gameHighscore) {
//           gameHighscore = gameScore
//           highscore.textContent = gameHighscore
//         }
//       } else if (myNumber > randomNumber) {
//         message.textContent = 'To down...'
//         gameScore--
//         if (gameScore === 0) {
//           gameOver = true
//           message.textContent = 'Game Over'
//         }
//       } else if (randomNumber > myNumber) {
//         message.textContent = 'To up...'
//         gameScore--
//         if (gameScore === 0) {
//           gameOver = true
//           message.textContent = 'Game Over'
//         }
//       }
//       score.textContent = gameScore
//     }

//   } else {
//     message.textContent = 'Type number'
//   }
// })

// againBtn.addEventListener('click', () => {
//   body.style.backgroundColor = '#222'
//   message.textContent = 'Start guessing...'
//   number.textContent = '?'
//   score.textContent = 20
//   highscore.textContent = 0
//   guess.value = ''
// })

