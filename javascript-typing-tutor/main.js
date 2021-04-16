// $('#endGame').modal('show')

const phrase = document.querySelector('.phrase')
const phraseNodes = phrase.childNodes
const phraseStr = phrase.textContent;
const phraseConvert = [...phrase.textContent].map(x => {
  return `<span class="">${x}</span>`
}).join('')

phrase.innerHTML = phraseConvert
phraseNodes[0].classList.add('current-letter')
let currentIndex = 0

const correctKey = (e) => {
  phraseNodes[currentIndex].classList.add('green')
  phraseNodes[currentIndex].classList.remove('red')
  phraseNodes[currentIndex].classList.remove('current-letter')
  if (currentIndex === phraseNodes.length - 1) {
    return;
  }
  phraseNodes[currentIndex + 1].classList.add('current-letter')
  currentIndex++
}

const wrongKey = (e) => {
  phraseNodes[currentIndex].classList.add('red')
}

const keyPress = (e) => {
  // console.log(e.key)
  // console.log('current letter:', phraseNodes[currentIndex].textContent)
  if (e.key === phraseNodes[currentIndex].textContent && currentIndex < phraseNodes.length) {
    correctKey(e)
  } else {
    wrongKey(e)
  }
}
window.addEventListener('keydown', keyPress)
