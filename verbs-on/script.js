
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
    {
      sentence: "work on",
      example: "I’m working on a new project.",
      audio: "./songs/I’m working on a new project..mp3",
      image: "./images/work on.png"
    },       
    {
      sentence: "act on",
      example: "He acted on her advice.",
      audio: "./songs/He acted on her advice..mp3",
      image: "./images/act on.png"
    }, 
    {
      sentence: "impose on",
      example: "Don’t impose your beliefs on others.",
      audio: "./songs/Don’t impose your beliefs on others..mp3",
      image: "./images/impose on.png"
    }, 
    {
      sentence: "prey on",
      example: "Wolves prey on smaller animals.",
      audio: "./songs/Wolves prey on smaller animals..mp3",
      image: "./images/prey on.png"
    }, 
    {
      sentence: "feed on",
      example: "Bats feed on insects.",
      audio: "./songs/Bats feed on insects..mp3",
      image: "./images/feed on.png"
    }, 
    {
      sentence: "draw on",
      example: "She drew on her experience to solve the problem.",
      audio: "./songs/She drew on her experience to solve the problem..mp3",
      image: "./images/draw on.png"
    }, 
    {
      sentence: "focus on",
      example: "Focus on your goals.",
      audio: "./songs/Focus on your goals..mp3",
      image: "./images/focus on2.png"
    },     
    {
      sentence: "report on",
      example: "He reported on the meeting.",
      audio: "./songs/He reported on the meeting..mp3",
      image: "./images/report on.png"
    },                                    
    {
      sentence: "comment on",
      example: "She commented on the situation.",
      audio: "./songs/She commented on the situation..mp3",
      image: "./images/comment on2.png"
    },
    {
      sentence: "advise on",
      example: "They advised on legal issues.",
      audio: "./songs/They advised on legal issues..mp3",
      image: "./images/advise on.png"
    },
    {
      sentence: "lecture on",
      example: "The professor lectured on biology.",
      audio: "./songs/The professor lectured on biology..mp3",
      image: "./images/lecture on.png"
    },
    {
      sentence: "consult on",
      example: "He was consulted on the project.",
      audio: "./songs/He was consulted on the project..mp3",
      image: "./images/consult on.png"
    },
    {
      sentence: "inform on",
      example: "He informed on his partner to the police.",
      audio: "./songs/He informed on his partner to the police..mp3",
      image: "./images/inform on.png"
    },
    {
      sentence: "go on",
      example: "Please go on.",
      audio: "./songs/Please go on..mp3",
      image: "./images/go on.png"
    },    
    {
      sentence: "carry on",
      example: "Carry on with your work.",
      audio: "./songs/Carry on with your work..mp3",
      image: "./images/carry on.png"
    },  
    {
      sentence: "move on",
      example: "It’s time to move on",
      audio: "./songs/It’s time to move on..mp3",
      image: "./images/move on.png"
    },  
    {
      sentence: "keep on",
      example: "Keep on trying.",
      audio: "./songs/Keep on trying..mp3",
      image: "./images/keep on.png"
    },  
    {
      sentence: "live on",
      example: "They live on a small income.",
      audio: "./songs/They live on a small income..mp3",
      image: "./images/live on.png"
    },  
    {
      sentence: "hold on",
      example: "Hold on a minute.",
      audio: "./songs/Hold on a minute..mp3",
      image: "./images/hold on.png"
    },  
    {
      sentence: "get on",
      example: "They get on well.",
      audio: "./songs/They get on well..mp3",
      image: "./images/get on.png"
    },  
    {
      sentence: "bet on",
      example: "I wouldn’t bet on that.",
      audio: "./songs/I wouldn’t bet on that..mp3",
      image: "./images/bet on.png"
    },  
    {
      sentence: "blame on",
      example: "Don’t blame it on me.",
      audio: "./songs/Don’t blame it on me..mp3",
      image: "./images/blame on.png"
    },  
    {
      sentence: "spend on",
      example: "She spends too much money on clothes.",
      audio: "./songs/She spends too much money on clothes..mp3",
      image: "./images/spend on.png"
    },  
    {
      sentence: "rely on",
      example: "You can rely on luck sometimes.",
      audio: "./songs/You can rely on luck sometimes..mp3",
      image: "./images/rely on2.png"
    },  
    {
      sentence: "check on",
      example: "I’ll check on the baby.",
      audio: "./songs/I’ll check on the baby..mp3",
      image: "./images/check on.png"
    },  
    {
      sentence: "decide on",
      example: "We decided on the blue color.",
      audio: "./songs/We decided on the blue color..mp3",
      image: "./images/decide on2.png"
    },  
    {
      sentence: "vote on",
      example: "They’ll vote on the new law.",
      audio: "./songs/They’ll vote on the new law..mp3",
      image: "./images/vote on.png"
    },  
    {
      sentence: "congratulate on",
      example: "I congratulated her on her success.",
      audio: "./songs/I congratulated her on her success..mp3",
      image: "./images/congratulate on.png"
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

