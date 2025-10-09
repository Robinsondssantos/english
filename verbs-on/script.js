
window.onload = function () {
  let dictionary = [
    {
      sentence: "depend on",
      example: "It depends on the weather.",
      audio: "./songs/It depends on the weather..mp3",
      image: "./images/depend on.png"
    },
    {
      sentence: "rely on",
      example: "You can rely on me.",
      audio: "./songs/You can rely on me..mp3",
      image: "./images/rely on.png"
    },    
    {
      sentence: "count on",
      example: "I’m counting on you to help me.",
      audio: "./songs/I’m counting on you to help me..mp3",
      image: "./images/count on.png"
    },
    {
      sentence: "insist on",
      example: "She insisted on paying for dinner.",
      audio: "./songs/She insisted on paying for dinner..mp3",
      image: "./images/insist on.png"
    },
    {
      sentence: "focus on",
      example: "He needs to focus on his studies.",
      audio: "./songs/He needs to focus on his studies..mp3",
      image: "./images/focus on.png"
    },
    {
      sentence: "concentrate on",
      example: "She’s concentrating on her work.",
      audio: "./songs/She’s concentrating on her work..mp3",
      image: "./images/concentrate on.png"
    },
    {
      sentence: "base on",
      example: "The movie is based on a true story.",
      audio: "./songs/The movie is based on a true story..mp3",
      image: "./images/base on.png"
    },
    {
      sentence: "agree on",
      example: "They agreed on a plan.",
      audio: "./songs/They agreed on a plan..mp3",
      image: "./images/agree on.png"
    },
    {
      sentence: "decide on",
      example: "We haven’t decided on a name yet.",
      audio: "./songs/We haven’t decided on a name yet..mp3",
      image: "./images/decide on.png"
    },
    {
      sentence: "comment on",
      example: "He commented on the new design.",
      audio: "./songs/He commented on the new design..mp3",
      image: "./images/comment on.png"
    },
    {
      sentence: "depend upon",
      example: "It all depends upon you.",
      audio: "./songs/It all depends upon you..mp3",
      image: "./images/depend upon.png"
    },
    {
      sentence: "rely upon",
      example: "It all relies upon you.",
      audio: "./songs/It all relies upon you..mp3",
      image: "./images/rely upon.png"
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
    image.src = _word.image;
    audio.src = _word.audio;
    audio.load();

    showWord(wordElement, word);     
    showExample(exampleElement, example) ;

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
      image.src = _word.image;
      audio.src = _word.audio;
      audio.load();
      audio.play();

      showWord(wordElement, word);      
      showExample(exampleElement, example);
      showScore(scoreElement, score);
      showCounter(counterElement, counter);
      clearAndFocusElement(answerElement);
      dictionary = removeWord(dictionary, word);
    }
  }

  main();
}

