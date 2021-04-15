const words = Array.from(document.querySelectorAll('span.word-span'))
const wordsInnerText = words.map(x => x.innerText)
const wordsStr = wordsInnerText.join('')
const letters = [...wordsStr]
let currentIndex = 0

const test = document.querySelector('.test')

/* Experimental stuff start */
const phrase = document.querySelector('.test')
const phraseNodes = phrase.childNodes
const phraseStr = phrase.textContent;
// const phraseHTML = phrase.innerHTML;
const phraseConvert = [...phrase.textContent].map(x => {
  return `<span class="">${x}</span>`
}).join('')

phrase.innerHTML = phraseConvert

phraseNodes[0].classList.add('current-letter')
const correctKey = (e) => {
  // add green class
  // remove red class
  // increment currentIndex
  // set the next node's class to 'current-letter'
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
  // change color of key to red
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

/*
  if the key pressed is the next one supposed to be pressed in 'letters',
  change its color to green.  If not, change to red.

  only progress to the next letter in 'letters' IF it was correctly typed

  find a way to target the individual letter within the word, in the <span> and how to color it.


*/


/* experimental stuff
const phrase = document.querySelector('.test')
const spanArray = phrase.childNodes;
const phraseStr = phrase.textContent;
const phraseHTML = phrase.innerHTML;
console.log(phraseHTML)

const correctKey = () => {
  // change color of key to green
  // increment currentIndex
  let phraseArr = [...phraseStr];
  let newLetter = `<span class="green">${phraseStr[currentIndex]}</span>`
  phraseArr.splice(currentIndex, 1, newLetter)
  let newPhrase = phraseArr.join('')

  // phrase.innerHTML = newPhrase;

  currentIndex++
  console.log(newPhrase)
}
*/
