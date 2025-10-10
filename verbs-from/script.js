
window.onload = function () {
  let dictionary = [
    {
      sentence: "come from",
      example: "She comes from Brazil.",
      audio: "./songs/She comes from Brazil..mp3",
      image: "./images/come from.png",
      meaning: "vir de",
    },
    {
      sentence: "arrive from",
      example: "The train arrived from London.",
      audio: "./songs/The train arrived from London..mp3",
      image: "./images/arrive from.png",
      meaning: "chegar de",
    },
    {
      sentence: "escape from",
      example: "He escaped from prison.",
      audio: "./songs/He escaped from prison..mp3",
      image: "./images/escape from.png",
      meaning: "escapar de",
    },
    {
      sentence: "emerge from",
      example: "A new idea emerged from our discussion.",
      audio: "./songs/A new idea emerged from our discussion..mp3",
      image: "./images/emerge from.png",
      meaning: "surgir de",
    },
    {
      sentence: "result from",
      example: "The damage resulted from the storm.",
      audio: "./songs/The damage resulted from the storm..mp3",
      image: "./images/result from.png",
      meaning: "resultar de",
    },
    {
      sentence: "stem from",
      example: "His fear stems from childhood trauma.",
      audio: "./songs/His fear stems from childhood trauma..mp3",
      image: "./images/stem from.png",
      meaning: "derivar de",
    },
    {
      sentence: "arise from",
      example: "Problems may arise from poor planning.",
      audio: "./songs/Problems may arise from poor planning..mp3",
      image: "./images/arise from.png",
      meaning: "surgir de",
    },
    {
      sentence: "evolve from",
      example: "Birds evolved from dinosaurs.",
      audio: "./songs/Birds evolved from dinosaurs..mp3",
      image: "./images/evolve from.png",
      meaning: "evoluir de",
    },
    {
      sentence: "recover from",
      example: "She recovered from the flu.",
      audio: "./songs/She recovered from the flu..mp3",
      image: "./images/recover from.png",
      meaning: "recuperar-se de",
    },
    {
      sentence: "resign from",
      example: "He resigned from his job.",
      audio: "./songs/He resigned from his job..mp3",
      image: "./images/resign from.png",
      meaning: "demitir-se de",
    },
    {
      sentence: "depart from",
      example: "The plane departed from the airport.",
      audio: "./songs/The plane departed from the airport..mp3",
      image: "./images/depart from.png",
      meaning: "partir de",
    },
    {
      sentence: "withdraw from",
      example: "The country withdrew from the agreement.",
      audio: "./songs/The country withdrew from the agreement..mp3",
      image: "./images/withdraw from.png",
      meaning: "retirar-se de",
    },
    {
      sentence: "differ from",
      example: "His opinion differs from mine.",
      audio: "./songs/His opinion differs from mine..mp3",
      image: "./images/differ from.png",
      meaning: "diferir de",
    },
    {
      sentence: "separate from",
      example: "The child was separated from his parents.",
      audio: "./songs/The child was separated from his parents..mp3",
      image: "./images/separate from.png",
      meaning: "separar de",
    },
    {
      sentence: "prevent from",
      example: "The rain prevented us from going out.",
      audio: "./songs/The rain prevented us from going out..mp3",
      image: "./images/prevent from.png",
      meaning: "impedir de",
    },
    {
      sentence: "protect from",
      example: "Sunscreen protects your skin from UV rays.",
      audio: "./songs/Sunscreen protects your skin from UV rays..mp3",
      image: "./images/protect from.png",
      meaning: "proteger de",
    },
    {
      sentence: "stop from",
      example: "Nothing can stop him from trying.",
      audio: "./songs/Nothing can stop him from trying..mp3",
      image: "./images/stop from.png",
      meaning: "impedir de",
    },
    {
      sentence: "prohibit from",
      example: "They prohibited us from entering.",
      audio: "./songs/They prohibited us from entering..mp3",
      image: "./images/prohibit from.png",
      meaning: "proibir de",
    },
    {
      sentence: "exclude from",
      example: "He was excluded from the team.",
      audio: "./songs/He was excluded from the team..mp3",
      image: "./images/exclude from.png",
      meaning: "excluir de",
    },
    {
      sentence: "distract from",
      example: "The noise distracted me from my work.",
      audio: "./songs/The noise distracted me from my work..mp3",
      image: "./images/distract from.png",
      meaning: "distrair de",
    },
    {
      sentence: "flee from",
      example: "Many people fled from the war zone.",
      audio: "./songs/Many people fled from the war zone..mp3",
      image: "./images/flee from.png",
      meaning: "fugir de",
    },
    {
      sentence: "free from",
      example: "The solution frees us from manual labor.",
      audio: "./songs/The solution frees us from manual labor..mp3",
      image: "./images/free from.png",
      meaning: "libertar de",
    },
    {
      sentence: "suffer from",
      example: "He suffers from insomnia.",
      audio: "./songs/He suffers from insomnia..mp3",
      image: "./images/suffer from.png",
      meaning: "sofrer de",
    },
    {
      sentence: "die from",
      example: "She died from hunger.",
      audio: "./songs/She died from hunger..mp3",
      image: "./images/die from.png",
      meaning: "morrer de (causa física)",
    },
    {
      sentence: "recover from",
      example: "He recovered from surgery quickly.",
      audio: "./songs/He recovered from surgery quickly..mp3",
      image: "./images/recover from2.png",
      meaning: "recuperar-se de",
    },
    {
      sentence: "learn from",
      example: "We learn from our mistakes.",
      audio: "./songs/We learn from our mistakes..mp3",
      image: "./images/learn from.png",
      meaning: "aprender com",
    },
    {
      sentence: "benefit from",
      example: "Students benefit from good teachers.",
      audio: "./songs/Students benefit from good teachers..mp3",
      image: "./images/benefit from.png",
      meaning: "se beneficiar de",
    },
    {
      sentence: "borrow from",
      example: "I borrowed money from my friend.",
      audio: "./songs/I borrowed money from my friend..mp3",
      image: "./images/borrow from.png",
      meaning: "pegar emprestado de",
    },
    {
      sentence: "steal from",
      example: "The thief stole from the store.",
      audio: "./songs/The thief stole from the store..mp3",
      image: "./images/steal from.png",
      meaning: "roubar de",
    },
    {
      sentence: "demand from",
      example: "The boss demanded more from his team.",
      audio: "./songs/The boss demanded more from his team..mp3",
      image: "./images/demand from.png",
      meaning: "exigir de",
    },
    {
      sentence: "hear from",
      example: "I haven’t heard from her in weeks.",
      audio: "./songs/I haven’t heard from her in weeks..mp3",
      image: "./images/hear from.png",
      meaning: "receber notícias de",
    },
    {
      sentence: "derive from",
      example: "The word “biology” derives from Greek.",
      audio: "./songs/The word “biology” derives from Greek..mp3",
      image: "./images/derive from.png",
      meaning: "derivar de",
    },
    {
      sentence: "originate from",
      example: "The custom originated from ancient China.",
      audio: "./songs/The custom originated from ancient China..mp3",
      image: "./images/originate from.png",
      meaning: "originar-se de",
    },
    {
      sentence: "quote from",
      example: "He quoted from Shakespeare.",
      audio: "./songs/He quoted from Shakespeare..mp3",
      image: "./images/quote from.png",
      meaning: "citar de",
    },
    {
      sentence: "differ from",
      example: "This result differs from the last one.",
      audio: "./songs/This result differs from the last one..mp3",
      image: "./images/differ from.png",
      meaning: "diferir de",
    },
    {
      sentence: "distinguish from",
      example: "Can you distinguish salt from sugar?",
      audio: "./songs/Can you distinguish salt from sugar_.mp3",
      image: "./images/distinguish from.png",
      meaning: "distinguir de",
    },
    {
      sentence: "separate from",
      example: "He separated from his business partner.",
      audio: "./songs/He separated from his business partner..mp3",
      image: "./images/separate from.png",
      meaning: "separar de",
    },
    {
      sentence: "tell apart from",
      example: "I can’t tell her apart from her twin.",
      audio: "./songs/I can’t tell her apart from her twin..mp3",
      image: "./images/tell apart from.png",
      meaning: "diferenciar de",
    },
    {
      sentence: "exclude from",
      example: "She was excluded from the group.",
      audio: "./songs/She was excluded from the group..mp3",
      image: "./images/exclude from.png",
      meaning: "excluir de",
    },
    {
      sentence: "disconnect from",
      example: "Please disconnect the cable from the socket.",
      audio: "./songs/Please disconnect the cable from the socket..mp3",
      image: "./images/disconnect from.png",
      meaning: "desconectar de",
    },
    {
      sentence: "remove from",
      example: "They removed the stains from the wall.",
      audio: "./songs/They removed the stains from the wall..mp3",
      image: "./images/remove from.png",
      meaning: "remover de",
    },
    {
      sentence: "detach from",
      example: "The label detached from the bottle.",
      audio: "./songs/The label detached from the bottle..mp3",
      image: "./images/detach from.png",
      meaning: "destacar de",
    },
    {
      sentence: "protect from",
      example: "Parents protect their children from danger.",
      audio: "./songs/Parents protect their children from danger..mp3",
      image: "./images/protect from.png",
      meaning: "proteger de",
    },
    {
      sentence: "save from",
      example: "The doctor saved her from death.",
      audio: "./songs/The doctor saved her from death..mp3",
      image: "./images/save from.png",
      meaning: "salvar de",
    },
    {
      sentence: "rescue from",
      example: "Firefighters rescued him from the car.",
      audio: "./songs/Firefighters rescued him from the car..mp3",
      image: "./images/rescue from.png",
      meaning: "resgatar de",
    },
    {
      sentence: "suffer from",
      example: "Many people suffer from anxiety.",
      audio: "./songs/Many people suffer from anxiety..mp3",
      image: "./images/suffer from.png",
      meaning: "sofrer de",
    },
    {
      sentence: "hide from",
      example: "She hid from the police.",
      audio: "./songs/She hid from the police..mp3",
      image: "./images/hide from.png",
      meaning: "esconder-se de",
    },
    {
      sentence: "escape from",
      example: "They escaped from the burning building.",
      audio: "./songs/They escaped from the burning building..mp3",
      image: "./images/escape from.png",
      meaning: "escapar de",
    },
    {
      sentence: "prevent from",
      example: "Fear prevents us from growing.",
      audio: "./songs/Fear prevents us from growing..mp3",
      image: "./images/prevent from2.png",
      meaning: "impedir de",
    },
    {
      sentence: "stop from",
      example: "Nothing stopped him from speaking the truth.",
      audio: "./songs/Nothing stopped him from speaking the truth..mp3",
      image: "./images/stop from.png",
      meaning: "impedir de",
    },
    {
      sentence: "abstain from",
      example: "She abstained from drinking alcohol.",
      audio: "./songs/She abstained from drinking alcohol..mp3",
      image: "./images/abstain from.png",
      meaning: "abster-se de",
    },
    {
      sentence: "refrain from",
      example: "Please refrain from smoking here.",
      audio: "./songs/Please refrain from smoking here..mp3",
      image: "./images/refrain from.png",
      meaning: "evitar, conter-se de",
    },
    {
      sentence: "resign from",
      example: "He resigned from the company.",
      audio: "./songs/He resigned from the company..mp3",
      image: "./images/resign from.png",
      meaning: "demitir-se de",
    },
    {
      sentence: "graduate from",
      example: "She graduated from Harvard.",
      audio: "./songs/She graduated from Harvard..mp3",
      image: "./images/graduate frompng",
      meaning: "demitir-se de",
    },
    {
      sentence: "appeal from",
      example: "The lawyer appealed from the decision.",
      audio: "./songs/The lawyer appealed from the decision..mp3",
      image: "./images/appeal from.png",
      meaning: "recorrer de",
    },
    {
      sentence: "recover from",
      example: "He recovered from his injury.",
      audio: "./songs/He recovered from his injury..mp3",
      image: "./images/recover from.png",
      meaning: "recuperar-se de",
    },
    {
      sentence: "suffer from",
      example: "They suffer from lack of resources.",
      audio: "./songs/They suffer from lack of resources..mp3",
      image: "./images/suffer from.png",
      meaning: "sofrer de",
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

