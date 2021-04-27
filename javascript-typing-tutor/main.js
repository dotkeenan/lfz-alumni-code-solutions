/* tests and functions to serve tests*/
const tests = {
  1: ["There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. The old man used to go to fix fences and do other odd jobs for the farmers around, and while he was gone the old woman, his wife, did the work of the house and worked in their own little plot of land."],
  2: ["She didn't understand how changed worked. When she looked at today compared to yesterday, there was nothing that she could see that was different. Yet, when she looked at today compared to last year, she couldn't see how anything was ever the same."],
  3: ['It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.'],
  4: [`It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next`],
  5: [`He was aware there were numerous wonders of this world including the unexplained creations of humankind that showed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids. There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense and he wondered how he was ever going to be able to explain it.`],
  6: [`He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life.`],
  7: [`She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun.`],
  8: [`The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier. She didn't who had sent it and briefly wondered who it might have been. As she began to unwrap it, she had no idea that opening it would completely change her life.`],
  9: [`It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.`],
  11: [`The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.`],
  12: [`I guess we could discuss the implications of the phrase "meant to be." That is if we wanted to drown ourselves in a sea of backwardly referential semantics and other mumbo-jumbo. Maybe such a discussion would result in the determination that "meant to be" is exactly as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all. But that's my existential underpants underpinnings showing. It's the way the cookie crumbles. And now I want a cookie.`],
  13: [`His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination. There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it.`],
  14: [`The alarm went off and Jake rose awake. Rising early had become a daily ritual, one that he could not fully explain. From the outside, it was a wonder that he was able to get up so early each morning for someone who had absolutely no plans to be productive during the entire day.`],
  15: [`Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough.`],
  16: [`It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.`],
  17: [`Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?`]
}

const completedTests = [];

/* Create dom queries and initial conversions to span separated letters */
const phrase = document.querySelector('.phrase')
const phraseNodes = phrase.childNodes
const phraseConvert = [...phrase.textContent].map(x => {
  return `<span class="">${x}</span>`
}).join('')
console.log(phraseNodes)
const liveAcc = document.getElementById('liveAcc')
const accuracyModal = document.getElementById('accuracyModal')
const mistakesModal = document.getElementById('mistakesModal')
const newGame = document.getElementById('playAgain')
const newTest = document.getElementById('newTest')
const restart = document.getElementById('restart')
const liveMistakes = document.getElementById('liveMistakes')

/* Starting code, initial values */
phrase.innerHTML = phraseConvert
phraseNodes[0].classList.add('current-letter')
let currentIndex = 0
let correct = phrase.textContent.length;
let total = phrase.textContent.length;
let score = (correct / total) > 0 ? correct / total : 0
let mistakes = 0;
liveMistakes.textContent = 0;

/* function to pick new test */
const randomTestPicker = () => {
  let randomNum = Math.floor(Math.random() * 17 + 1)
  phrase.textContent = tests[randomNum]
  phrase.innerHTML = [...phrase.textContent].map(x => {
    return `<span class="">${x}</span>`
  }).join('')
  resetGame();
}

// Need to implement this in all the scenarios.  Also resetting.
const updateLiveScore = (score) => {
  liveAcc.textContent = formatScore(score)
}

/* function to convert accuracy to correct format */
const formatScore = (score) => {
  return (score * 100).toFixed(2)
}

updateLiveScore(score)

const resetGame = () => {
  phraseNodes.forEach(x => x.classList.remove('green', 'current-letter', 'red'))
  phraseNodes[0].classList.add('current-letter')
  currentIndex = 0
  mistakes = 0
  liveMistakes.textContent = 0
  correct = phrase.textContent.length
  total = phrase.textContent.length;
  score = (correct / total) > 0 ? correct / total : 0
  updateLiveScore(score)
  $('#endGame').modal('hide')
}

/* functions that execute based on correct or incorrect keypresses */
const correctKey = (e) => {
  phraseNodes[currentIndex].classList.add('green')
  phraseNodes[currentIndex].classList.remove('red', 'current-letter')
  // correct++
  score = correct / total
  updateLiveScore(score)
  if (currentIndex === phraseNodes.length - 1) {
    accuracyModal.textContent = formatScore(score)
    mistakesModal.textContent = mistakes
    $('#endGame').modal('show')
    return;
  }
  phraseNodes[currentIndex + 1].classList.add('current-letter')
  currentIndex++
}

const wrongKey = (e) => {
  phraseNodes[currentIndex].classList.add('red')
  correct--
  mistakes++
  score = correct / total
  liveMistakes.textContent = mistakes
  updateLiveScore(score)
}

const keyPress = (e) => {
  if (e.key === 'Shift') return;
  if (e.key === phraseNodes[currentIndex].textContent && currentIndex < phraseNodes.length) {
    correctKey(e)
  } else {
    wrongKey(e)
  }
}

/* Event listeners */
newTest.addEventListener('mousedown', randomTestPicker)
restart.addEventListener('mousedown', resetGame)
newGame.addEventListener('mousedown', randomTestPicker)
window.addEventListener('keydown', keyPress)
