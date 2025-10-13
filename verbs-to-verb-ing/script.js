
window.onload = function () {
  let dictionary = [
    {
      sentence: "consider",
      example: "She considered moving to London.",
      audio: "./songs/She considered moving to London..mp3",
      image: "./images/She considered moving to London..png",
      meaning: "Considerar",
    },
    {
      sentence: "enjoy",
      example: "We enjoy playing board games.",
      audio: "./songs/We enjoy playing board games..mp3",
      image: "./images/We enjoy playing board games..png",
      meaning: "Gostar / desfrutar",
    },
    {
      sentence: "avoid",
      example: "He avoids eating fast food.",
      audio: "./songs/He avoids eating fast food..mp3",
      image: "./images/He avoids eating fast food..png",
      meaning: "Evitar",
    },
    {
      sentence: "deny",
      example: "He denied stealing the money.",
      audio: "./songs/He denied stealing the money..mp3",
      image: "./images/He denied stealing the money..png",
      meaning: "Negar",
    },
    {
      sentence: "finish",
      example: "I finished writing the report.",
      audio: "./songs/I finished writing the report..mp3",
      image: "./images/I finished writing the report..png",
      meaning: "Terminar",
    },
    {
      sentence: "imagine",
      example: "Can you imagine living without a phone?",
      audio: "./songs/Can you imagine living without a phone_.mp3",
      image: "./images/Can you imagine living without a phone_.png",
      meaning: "Imaginar",
    },
    {
      sentence: "mention",
      example: "She mentioned seeing him yesterday.",
      audio: "./songs/She mentioned seeing him yesterday..mp3",
      image: "./images/She mentioned seeing him yesterday..png",
      meaning: "Mencionar",
    },
    {
      sentence: "mind",
      example: "Do you mind helping me with this?",
      audio: "./songs/Do you mind helping me with this_.mp3",
      image: "./images/Do you mind helping me with this_.png",
      meaning: "Importar-se",
    },
    {
      sentence: "miss",
      example: "I miss going to the beach.",
      audio: "./songs/I miss going to the beach..mp3",
      image: "./images/I miss going to the beach..png",
      meaning: "Sentir falta/saudade",
    },
    {
      sentence: "postpone",
      example: "They postponed making a decision.",
      audio: "./songs/They postponed making a decision..mp3",
      image: "./images/They postponed making a decision..png",
      meaning: "Adiar",
    },
    {
      sentence: "put off",
      example: "They put off making a decision.",
      audio: "./songs/They put off making a decision..mp3",
      image: "./images/They put off making a decision..png",
      meaning: "Adiar",
    },
    {
      sentence: "practice",
      example: "You need to practice speaking English.",
      audio: "./songs/You need to practice speaking English..mp3",
      image: "./images/You need to practice speaking English..png",
      meaning: "Praticar",
    },
    {
      sentence: "recommend",
      example: "I recommend visiting that museum.",
      audio: "./songs/I recommend visiting that museum..mp3",
      image: "./images/I recommend visiting that museum..png",
      meaning: "Recomendar",
    },
    {
      sentence: "risk",
      example: "He risked losing his job.",
      audio: "./songs/He risked losing his job..mp3",
      image: "./images/He risked losing his job..png",
      meaning: "Arriscar",
    },
    {
      sentence: "suggest",
      example: "I suggest taking a break now.",
      audio: "./songs/I suggest taking a break now..mp3",
      image: "./images/I suggest taking a break now..png",
      meaning: "Sugerir",
    },
    {
      sentence: "give up",
      example: "She gave up smoking last year.",
      audio: "./songs/She gave up smoking last year..mp3",
      image: "./images/She gave up smoking last year..png",
      meaning: "Desistir",
    },
    {
      sentence: "keep",
      example: "Keep working, you're doing great!",
      audio: "./songs/Keep working, you're doing great_.mp3",
      image: "./images/Keep working, you're doing great_.png",
      meaning: "Continuar",
    },
    {
      sentence: "keep on",
      example: "Keep on working, you're doing great!",
      audio: "./songs/Keep on working, you're doing great_.mp3",
      image: "./images/Keep on working, you're doing great_.png",
      meaning: "Continuar",
    },
    {
      sentence: "start",
      example: "You start focusing on fashion instead of substance.",
      audio: "./songs/You start focusing on fashion instead of substance..mp3",
      image: "./images/You start focusing on fashion instead of substance..png",
      meaning: "Continuar",
    },
  ]

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getWord(words, index) {
    return words.at(index);
  }

  function removeWord(words, word) {
    return words.filter(item => item.sentence !== word)
  }

  function getRandomWord(words) {
    const size = words.length;
    const randomInteger = getRandomInteger(1, size);
    return words.at(randomInteger);
  }

  function getMaskedWord(word) {
    console.log('word:', word);
    splittedWord = word.split("");
    if (getRandomInteger(0, 1)) {
      const w = splittedWord.map((character, index ) => {
        return index % 2 ? character : '_'; 
      })
      return w.join('');
    } else {
      const w = splittedWord.map((character, index ) => {
        return index % 2 ? '_' : character; 
      })
      return w.join('');
    }
  }

  function showExample(element, example) {
    element.innerText = example.toLowerCase();
  }

  function showMeaning(element, meaning) {
    element.innerText = meaning.toLowerCase();
  }

  function showWord(element, word) {    
    element.innerText = getMaskedWord(word.toLowerCase());
  }

  function showCounter(element, counter) {
    element.innerText = counter;
  }

  function showScore(element, score) {
    element.innerText = score;
  }

  function clearAndFocusElement(element) {
    element.value = "";
    element.focus();
  }

  function calculateScore(score, word, answer) {
    if (word.toLowerCase().trim() == answer.toLowerCase().trim()) {
      return score + 1;
    } 
    return score;
  }

  function main() {
    const wordElement = document.getElementById("word");
    const exampleElement = document.getElementById("example");
    const meaningElement = document.getElementById("meaning");
    const counterElement = document.getElementById("counter");
    const scoreElement = document.getElementById("score");
    const answerElement = document.getElementById("answer");

    const btnCheck = document.getElementById("btn-check");

    const image = document.getElementById("image");
    const audio = document.getElementById("audio");

    const btnPlayer = document.getElementById("btn-player");
    btnPlayer.onclick = () => { audio.play(); };

    let counter = 0;
    let score = 0;

    const randomInteger = getRandomInteger(0, dictionary.length - 1);
    let _word = getWord(dictionary, randomInteger);
    let word = _word.sentence;
    let example = _word.example;
    let meaning = _word.meaning;
    image.src = _word.image;
    audio.src = _word.audio;
    audio.load();

    showWord(wordElement, word);     
    showExample(exampleElement, example) ;
    showMeaning(meaningElement, meaning) ;

    showScore(scoreElement, score);
    showCounter(counterElement, counter);
    clearAndFocusElement(answerElement);
    dictionary = removeWord(dictionary, word);

    btnCheck.onclick = function () {
      counter++;
      const answer = answerElement.value;
      const newScore = calculateScore(score, word, answer);

      if (newScore > score) {
      }
      score = newScore;

      const randomInteger = getRandomInteger(0, dictionary.length - 1);
      _word = getWord(dictionary, randomInteger);
      word = _word.sentence;
      example = _word.example;
      meaning = _word.meaning;
      image.src = _word.image;
      audio.src = _word.audio;
      audio.load();
      audio.play();

      showWord(wordElement, word);      
      showExample(exampleElement, example);
      showMeaning(meaningElement, meaning);
      showScore(scoreElement, score);
      showCounter(counterElement, counter);
      clearAndFocusElement(answerElement);
      dictionary = removeWord(dictionary, word);
    }
  }

  main();
}

