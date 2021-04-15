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

// console.log(phrase.innerHTML)


/* Experimental stuff end */




const correctKey = () => {
  // change color of key to green
  // increment currentIndex
}

const wrongKey = () => {
  // change color of key to red
}

const keypress = (e) => {
  console.log(e.key)
  if (e.key === letters[currentIndex]) {
    correctKey()
  } else {
    wrongKey()
  }
}
window.addEventListener('keydown', keypress)

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
