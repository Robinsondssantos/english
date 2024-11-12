window.onload = function () {
  const dictionary = [
    {
      sentence: "",
      translation: "",
      audioLink: "",
      imagemLink: ""
    }
  ]



  let words = [
    "allow",
    "add",
    "appear",
    "ask",
    "be",
    "become",
    "begin",
    "believe",
    "bring",
    "build",
    "buy",
    "call",
    "can",
    "change",
    "consider",
    "continue",
    "could",
    "come",
    "create",
    "cut",
    "die",
    "do",
    "expect",
    "fall",
    "feel",
    "find",
    "fold",
    "follow",
    "get",
    "give",
    "go",
    "grow",
    "happen",
    "have",
    "hear",
    "help",
    "hold",
    "include",
    "keep",
    "kill",
    "know",
    "lead",
    "leave",
    "learn",
    "let",
    "live",
    "look",
    "lose",
    "love",
    "make",
    "mean",
    "meet",
    "move",
    "may",
    "might",
    "must",
    "need",
    "open",
    "pay",
    "play",
    "provide",
    "put",
    "reach",
    "read",
    "remain",
    "remember",
    "run",
    "say",
    "see",
    "seem",
    "send",
    "serve",
    "set",
    "should",
    "show",
    "sit",
    "speak",
    "spend",
    "stand",
    "start",
    "stay",
    "stop",
    "take",
    "talk",
    "tell",
    "think",
    "try",
    "turn",
    "understand",
    "use",
    "wait",
    "walk",
    "want",
    "watch",
    "will",
    "win",
    "work",
    "would"
  ];

  let translatedWords = [
    "permitir",
    "adicionar",
    "aparecer",
    "perguntar",
    "ser",
    "tornar-se",
    "começar",
    "acreditar",
    "trazer",
    "construir",
    "comprar",
    "chamar",
    "pode",
    "mudar",
    "considerar",
    "continuar",
    "poderia",
    "vir",
    "criar",
    "cortar",
    "morrer",
    "fazer",
    "esperar",
    "cair",
    "sentir",
    "encontrar",
    "dobrar",
    "seguir",
    "obter",
    "dar",
    "ir",
    "crescer",
    "acontecer",
    "ter",
    "ouvir",
    "ajudar",
    "segurar",
    "incluir",
    "manter",
    "matar",
    "saber",
    "liderar",
    "sair",
    "aprender",
    "deixar",
    "viver",
    "olhar",
    "perder",
    "amar",
    "fazer",
    "significar",
    "conhecer",
    "mover",
    "pode",
    "pode",
    "deve",
    "precisar",
    "abrir",
    "pagar",
    "jogar",
    "fornecer",
    "colocar",
    "alcançar",
    "ler",
    "permanecer",
    "lembrar",
    "correr",
    "dizer",
    "ver",
    "parecer",
    "enviar",
    "servir",
    "definir",
    "deveria",
    "mostrar",
    "sentar",
    "falar",
    "gastar",
    "ficar em pé",
    "começar",
    "ficar",
    "parar",
    "pegar",
    "falar",
    "contar",
    "pensar",
    "tentar",
    "virar",
    "entender",
    "usar",
    "esperar",
    "andar",
    "querer",
    "observar",
    "vai",
    "vencer",
    "trabalhar",
    "faria"
  ];

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getWord(words, index) {
    return words.at(index);
  }

  function removeWord(words, word) {
    wordsCopy = [...words];
    return wordsCopy.filter(item => item !== word)
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

  function showTranslation(element, translation) {
    element.innerText = translation.toLowerCase();
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
    const translationElement = document.getElementById("translation");
    const counterElement = document.getElementById("counter");
    const scoreElement = document.getElementById("score");
    const answerElement = document.getElementById("answer");

    const btnCheck = document.getElementById("btn-check");

    let counter = 0;
    let score = 0;
    const randomInteger = getRandomInteger(0, words.length - 1);
    // console.log('randomInteger:', randomInteger);
    let word = getWord(words, randomInteger);
    let translation = getWord(translatedWords, randomInteger);

    showWord(wordElement, word);     
    showTranslation(translationElement, translation) ;

    showScore(scoreElement, score);
    showCounter(counterElement, counter);
    clearAndFocusElement(answerElement);

    btnCheck.onclick = function () {
      counter++;
      const answer = answerElement.value;
      const newScore = calculateScore(score, word, answer);

      if (newScore > score) {
        // words = removeWord(words, word);
        // translatedWords = removeWord(translatedWords, translation);
      }
      // console.log('words.length:', words.length);
      // console.log('translatedWords.length', translatedWords.length)
      score = newScore;

      const randomInteger = getRandomInteger(0, words.length - 1);
      // console.log('randomInteger:', randomInteger);
      word = getWord(words, randomInteger);
      translation = getWord(translatedWords, randomInteger);

      showWord(wordElement, word);      
      showTranslation(translationElement, translation);
      showScore(scoreElement, score);
      showCounter(counterElement, counter);
      clearAndFocusElement(answerElement);
    }
  }

  main();
}

