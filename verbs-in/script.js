
window.onload = function () {
  let dictionary = [
    {
      sentence: "believe in",
      example: "I believe in you.",
      audio: "./songs/I believe in you..mp3",
      image: "./images/I believe in you..png",
      meaning: "acreditar em",
    },
    {
      sentence: "participate in",
      example: "She participated in the meeting.",
      audio: "./songs/She participated in the meeting..mp3",
      image: "./images/She participated in the meeting..png",
      meaning: "participar de",
    },
    {
      sentence: "involve in",
      example: "He got involved in politics.",
      audio: "./songs/He got involved in politics..mp3",
      image: "./images/He got involved in politics..png",
      meaning: "envolver-se em",
    },
    {
      sentence: "engage in",
      example: "They engaged in a heated debate.",
      audio: "./songs/They engaged in a heated debate..mp3",
      image: "./images/They engaged in a heated debate..png",
      meaning: "engajar-se em",
    },
    {
      sentence: "take part in",
      example: "Many people took part in the project.",
      audio: "./songs/Many people took part in the project..mp3",
      image: "./images/Many people took part in the project..png",
      meaning: "tomar parte em",
    },
    {
      sentence: "be interested in",
      example: "I'm interested in learning French.",
      audio: "./songs/I'm interested in learning French..mp3",
      image: "./images/I'm interested in learning French..png",
      meaning: "estar interessado em",
    },
    {
      sentence: "specialize in",
      example: "She specializes in digital marketing.",
      audio: "./songs/She specializes in digital marketing..mp3",
      image: "./images/She specializes in digital marketing..png",
      meaning: "especializar-se em",
    },
    {
      sentence: "succeed in",
      example: "He succeeded in solving the problem.",
      audio: "./songs/He succeeded in solving the problem..mp3",
      image: "./images/He succeeded in solving the problem..png",
      meaning: "ter sucesso em",
    },
    {
      sentence: "invest in",
      example: "They invest in technology.",
      audio: "./songs/They invest in technology..mp3",
      image: "./images/They invest in technology..png",
      meaning: "investir em",
    },
    {
      sentence: "be engaged in",
      example: "She is engaged in research.",
      audio: "./songs/She is engaged in research..mp3",
      image: "./images/She is engaged in research..png",
      meaning: "estar envolvido em",
    },
    {
      sentence: "trust in",
      example: "You can trust in your instincts.",
      audio: "./songs/You can trust in your instincts..mp3",
      image: "./images/You can trust in your instincts..png",
      meaning: "confiar em",
    },
    {
      sentence: "believe in",
      example: "We believe in equality.",
      audio: "./songs/We believe in equality..mp3",
      image: "./images/We believe in equality..png",
      meaning: "acreditar em",
    },
    {
      sentence: "confide in",
      example: "She confided in her best friend.",
      audio: "./songs/She confided in her best friend..mp3",
      image: "./images/She confided in her best friend..png",
      meaning: "confiar em (abrir-se para alguém)",
    },
    {
      sentence: "be absorbed in",
      example: "He was absorbed in his book.",
      audio: "./songs/He was absorbed in his book..mp3",
      image: "./images/He was absorbed in his book..png",
      meaning: "estar absorto em",
    },
    {
      sentence: "be lost in",
      example: "She was lost in her thoughts.",
      audio: "./songs/She was lost in her thoughts..mp3",
      image: "./images/She was lost in her thoughts..png",
      meaning: "estar perdido em",
    },
    {
      sentence: "enter in",
      example: "He entered in a contract.",
      audio: "./songs/He entered in a contract..mp3",
      image: "./images/He entered in a contract..png",
      meaning: "entrar em",
    },
    {
      sentence: "plug in",
      example: "Plug in the charger.",
      audio: "./songs/Plug in the charger..mp3",
      image: "./images/Plug in the charger..png",
      meaning: "conectar (à tomada, sistema etc.)",
    },
    {
      sentence: "fill in",
      example: "Please fill in this form.",
      audio: "./songs/Please fill in this form..mp3",
      image: "./images/Please fill in this form..png",
      meaning: "preencher",
    },
    {
      sentence: "break in",
      example: "Someone broke in last night.",
      audio: "./songs/Someone broke in last night..mp3",
      image: "./images/Someone broke in last night..png",
      meaning: "invadir / amaciar (sapatos) / interromper",
    },
    {
      sentence: "check in",
      example: "We checked in at the hotel.",
      audio: "./songs/We checked in at the hotel..mp3",
      image: "./images/We checked in at the hotel..png",
      meaning: "registrar-se",
    },
    {
      sentence: "log in",
      example: "Please log in to your account.",
      audio: "./songs/Please log in to your account..mp3",
      image: "./images/Please log in to your account..png",
      meaning: "fazer login",
    },
    {
      sentence: "sign in",
      example: "Please sign in to your account.",
      audio: "./songs/Please sign in to your account..mp3",
      image: "./images/Please sign in to your account..png",
      meaning: "fazer login",
    },
    {
      sentence: "give in",
      example: "He finally gave in to the pressure.",
      audio: "./songs/He finally gave in to the pressure..mp3",
      image: "./images/He finally gave in to the pressure..png",
      meaning: "ceder",
    },
    {
      sentence: "hand in",
      example: "Please hand in your homework.",
      audio: "./songs/Please hand in your homework..mp3",
      image: "./images/Please hand in your homework..png",
      meaning: "entregar (trabalho, tarefa)",
    },
    {
      sentence: "join in",
      example: "Why don’t you join in the game?",
      audio: "./songs/Why don’t you join in the game_.mp3",
      image: "./images/Why don’t you join in the game_.png",
      meaning: "juntar-se",
    },
    {
      sentence: "take in",
      example: "She took in every word.",
      audio: "./songs/She took in every word..mp3",
      image: "./images/She took in every word..png",
      meaning: "absorver / acolher / enganar",
    },
    {
      sentence: "bring in",
      example: "This new policy will bring in more revenue.",
      audio: "./songs/This new policy will bring in more revenue..mp3",
      image: "./images/This new policy will bring in more revenue..png",
      meaning: "gerar / trazer",
    },
    {
      sentence: "call in",
      example: "They called in an expert.",
      audio: "./songs/They called in an expert..mp3",
      image: "./images/They called in an expert..png",
      meaning: "chamar / convocar",
    },
    {
      sentence: "come in",
      example: "Please come in.",
      audio: "./songs/Please come in..mp3",
      image: "./images/Please come in..png",
      meaning: "entrar",
    },
    {
      sentence: "move in",
      example: "We moved in last week.",
      audio: "./songs/We moved in last week..mp3",
      image: "./images/We moved in last week..png",
      meaning: "mudar-se para",
    },
    {
      sentence: "step in",
      example: "The teacher had to step in.",
      audio: "./songs/The teacher had to step in..mp3",
      image: "./images/The teacher had to step in..png",
      meaning: "intervir",
    },
    {
      sentence: "fit in",
      example: "He doesn’t fit in with the group.",
      audio: "./songs/He doesn’t fit in with the group..mp3",
      image: "./images/He doesn’t fit in with the group..png",
      meaning: "encaixar-se / integrar-se",
    },
    {
      sentence: "fill in",
      example: "Fill in the blanks.",
      audio: "./songs/Fill in the blanks..mp3",
      image: "./images/Fill in the blanks..png",
      meaning: "preencher",
    },
    {
      sentence: "cut in",
      example: "Don’t cut in when I’m speaking.",
      audio: "./songs/Don’t cut in when I’m speaking..mp3",
      image: "./images/Don’t cut in when I’m speaking..png",
      meaning: "interromper",
    },
    {
      sentence: "drop in",
      example: "Drop in anytime!",
      audio: "./songs/Drop in anytime!.mp3",
      image: "./images/Drop in anytime!.png",
      meaning: "fazer uma visita rápida",
    },
    {
      sentence: "bring in",
      example: "The new plan will bring in more clients.",
      audio: "./songs/The new plan will bring in more clients..mp3",
      image: "./images/The new plan will bring in more clients..png",
      meaning: "introduzir / gerar",
    },
    {
      sentence: "get in",
      example: "Get in the car.",
      audio: "./songs/Get in the car..mp3",
      image: "./images/Get in the car..png",
      meaning: "entrar",
    },
    {
      sentence: "join in",
      example: "He joined in the fun.",
      audio: "./songs/He joined in the fun..mp3",
      image: "./images/He joined in the fun..png",
      meaning: "participar",
    },
    {
      sentence: "look in",
      example: "Look in the drawer.",
      audio: "./songs/Look in the drawer..mp3",
      image: "./images/Look in the drawer..png",
      meaning: "dar uma olhada",
    },
    {
      sentence: "turn in",
      example: "He turned in the report.",
      audio: "./songs/He turned in the report..mp3",
      image: "./images/He turned in the report..png",
      meaning: "entregar / ir dormir",
    },
    {
      sentence: "check in",
      example: "We checked in at the airport.",
      audio: "./songs/We checked in at the airport..mp3",
      image: "./images/We checked in at the airport..png",
      meaning: "registrar-se",
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

