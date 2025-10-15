
window.onload = function () {
  let dictionary = [
    {
      sentence: "oi",
      example: "We need to change the oil in the car.",
      audio: "./songs/We need to change the oil in the car..mp3",
      image: "./images/We need to change the oil in the car..png",
      meaning: "oi - Precisamos trocar o óleo do carro.",
    },
    {
      sentence: "oi",
      example: "She has a beautiful singing voice. ",
      audio: "./songs/She has a beautiful singing voice..mp3",
      image: "./images/She has a beautiful singing voice..png",
      meaning: "oi - Ela tem uma bela voz para cantar.",
    },
    {
      sentence: "oa",
      example: "I like to eat oatmeal for breakfast.",
      audio: "./songs/I like to eat oatmeal for breakfast..mp3",
      image: "./images/I like to eat oatmeal for breakfast..png",
      meaning: "ou - Eu gosto de comer aveia no café da manhã.",
    },
    {
      sentence: "oa",
      example: "We took a small boat out on the lake.",
      audio: "./songs/We took a small boat out on the lake..mp3",
      image: "./images/We took a small boat out on the lake..png",
      meaning: "ou - Nós pegamos um pequeno barco no lago.",
    },
    {
      sentence: "au",
      example: "August is usually the hottest month.",
      audio: "./songs/August is usually the hottest month..mp3",
      image: "./images/August is usually the hottest month..png",
      meaning: "ó - Agosto é geralmente o mês mais quente.",
    },
    {
      sentence: "au",
      example: "Please pass the tomato sauce. ",
      audio: "./songs/Please pass the tomato sauce. .mp3",
      image: "./images/Please pass the tomato sauce. .png",
      meaning: "ó - Por favor, passe o molho de tomate.",
    },
    {
      sentence: "aw",
      example: "Never eat raw chicken.",
      audio: "./songs/Never eat raw chicken..mp3",
      image: "./images/Never eat raw chicken..png",
      meaning: "ó - Nunca coma frango cru.",
    },
    {
      sentence: "aw",
      example: "The cat gently held out its paw.",
      audio: "./songs/The cat gently held out its paw..mp3",
      image: "./images/The cat gently held out its paw..png",
      meaning: "ó - pata (de animal) - O gato estendeu a pata gentilmente.",
    },
    {
      sentence: "ue",
      example: "I used strong glue to fix the vase. ",
      audio: "./songs/I used strong glue to fix the vase..mp3",
      image: "./images/I used strong glue to fix the vase..png",
      meaning: "u - Eu usei cola forte para consertar o vaso.",
    },
    {
      sentence: "ue",
      example: "Everything he said was true.",
      audio: "./songs/Everything he said was true..mp3",
      image: "./images/Everything he said was true..png",
      meaning: "u - Tudo o que ele disse era verdade.",
    },
    {
      sentence: "oy",
      example: "The children screamed with joy.",
      audio: "./songs/The children screamed with joy..mp3",
      image: "./images/The children screamed with joy..png",
      meaning: "oi - As crianças gritaram de alegria.",
    },
    {
      sentence: "oy",
      example: "My dog loves to play with his favorite toy.",
      audio: "./songs/My dog loves to play with his favorite toy..mp3",
      image: "./images/My dog loves to play with his favorite toy..png",
      meaning: "oi - Meu cachorro adora brincar com seu brinquedo favorito.",
    },
    {
      sentence: "ow",
      example: "We saw an owl sitting in the tree.",
      audio: "./songs/We saw an owl sitting in the tree..mp3",
      image: "./images/We saw an owl sitting in the tree..png",
      meaning: "au - Nós vimos uma coruja sentada na árvore.",
    },
    {
      sentence: "ow",
      example: "She painted the walls a light brown color.",
      audio: "./songs/She painted the walls a light brown color..mp3",
      image: "./images/She painted the walls a light brown color..png",
      meaning: "au - Ela pintou as paredes de uma cor marrom clara.",
    },
    {
      sentence: "ou",
      example: "I left my keys inside the house.",
      audio: "./songs/I left my keys inside the house..mp3",
      image: "./images/I left my keys inside the house..png",
      meaning: "au - Eu deixei minhas chaves dentro da casa.",
    },
    {
      sentence: "ou",
      example: "Close your mouth when you sneeze.",
      audio: "./songs/Close your mouth when you sneeze..mp3",
      image: "./images/Close your mouth when you sneeze..png",
      meaning: "au - Feche a boca quando espirrar.",
    },
    {
      sentence: "ou",
      example: "I ordered a bowl of hot vegetable soup.",
      audio: "./songs/I ordered a bowl of hot vegetable soup..mp3",
      image: "./images/I ordered a bowl of hot vegetable soup..png",
      meaning: "u - Eu pedi uma tigela de sopa de legumes quente.",
    },
    {
      sentence: "ou",
      example: "The entire study group met last night.",
      audio: "./songs/The entire study group met last night..mp3",
      image: "./images/The entire study group met last night..png",
      meaning: "u - O grupo de estudo inteiro se reuniu ontem à noite.",
    },
    {
      sentence: "ou",
      example: "She traveled to a different country last year.",
      audio: "./songs/She traveled to a different country last year..mp3",
      image: "./images/She traveled to a different country last year..png",
      meaning: "ã - Ela viajou para um país diferente no ano passado.",
    },
    {
      sentence: "ou",
      example: "Please do not touch the wet paint.",
      audio: "./songs/Please do not touch the wet paint..mp3",
      image: "./images/Please do not touch the wet paint..png",
      meaning: "ã - Por favor, não toque na tinta molhada.",
    },
    {
      sentence: "oo",
      example: "A large white goose chased us.",
      audio: "./songs/A large white goose chased us..mp3",
      image: "./images/A large white goose chased us..png",
      meaning: "u - Um ganso branco e grande nos perseguiu.",
    },
    {
      sentence: "oo",
      example: "You must choose carefully.",
      audio: "./songs/You must choose carefully..mp3",
      image: "./images/You must choose carefully..png",
      meaning: "u - Você deve escolher cuidadosamente.",
    },
    {
      sentence: "ew",
      example: "The bird flew high into the sky.",
      audio: "./songs/The bird flew high into the sky..mp3",
      image: "./images/The bird flew high into the sky..png",
      meaning: "u - O pássaro voou alto no céu.",
    },
    {
      sentence: "ew",
      example: "Always chew your food slowly.",
      audio: "./songs/Always chew your food slowly..mp3",
      image: "./images/Always chew your food slowly..png",
      meaning: "u - Sempre mastigue sua comida devagar.",
    },
    {
      sentence: "ee",
      example: "My favorite swing is on the old oak tree.",
      audio: "./songs/My favorite swing is on the old oak tree..mp3",
      image: "./images/My favorite swing is on the old oak tree..png",
      meaning: "i - Meu balanço favorito está no velho carvalho.",
    },
    {
      sentence: "ee",
      example: "The farmer has a flock of sheep.",
      audio: "./songs/The farmer has a flock of sheep..mp3",
      image: "./images/The farmer has a flock of sheep..png",
      meaning: "i - fazendeiro tem um rebanho de ovelhas.",
    },
    {
      sentence: "ea",
      example: "A red leaf fell from the branch.",
      audio: "./songs/A red leaf fell from the branch..mp3",
      image: "./images/A red leaf fell from the branch..png",
      meaning: "i - Uma folha vermelha caiu do galho.",
    },
    {
      sentence: "ea",
      example: "We spent the day swimming in the sea.",
      audio: "./songs/We spent the day swimming in the sea..mp3",
      image: "./images/We spent the day swimming in the sea..png",
      meaning: "i - Passamos o dia nadando no mar.",
    },
    {
      sentence: "ai",
      example: "We need the rain to water the garden.",
      audio: "./songs/We need the rain to water the garden..mp3",
      image: "./images/We need the rain to water the garden..png",
      meaning: "ei - Precisamos da chuva para regar o jardim.",
    },
    {
      sentence: "ai",
      example: "He was afraid of the dark.",
      audio: "./songs/He was afraid of the dark..mp3",
      image: "./images/He was afraid of the dark..png",
      meaning: "ei - Ele estava com medo do escuro.",
    },
    {
      sentence: "ar",
      example: "Let’s meet at the city park. ",
      audio: "./songs/Let’s meet at the city park. .mp3",
      image: "./images/Let’s meet at the city park. .png",
      meaning: "ar - Vamos nos encontrar no parque da cidade.",
    },
    {
      sentence: "ar",
      example: "Be careful with that sharp knife.",
      audio: "./songs/Be careful with that sharp knife..mp3",
      image: "./images/Be careful with that sharp knife..png",
      meaning: "ar - Tenha cuidado com aquela faca afiada.",
    },
    {
      sentence: "or",
      example: "Please use a fork to eat your salad. ",
      audio: "./songs/Please use a fork to eat your salad..mp3",
      image: "./images/Please use a fork to eat your salad..png",
      meaning: "or - Por favor, use um garfo para comer sua salada.",
    },
    {
      sentence: "or",
      example: "The movie was quite short.",
      audio: "./songs/The movie was quite short..mp3",
      image: "./images/The movie was quite short..png",
      meaning: "or - O filme foi bem curto.",
    },
    {
      sentence: "ar",
      example: "Always take good care of your dog.",
      audio: "./songs/Always take good care of your dog..mp3",
      image: "./images/Always take good care of your dog..png",
      meaning: "ér - Sempre cuide bem do seu cachorro.",
    },
    {
      sentence: "ar",
      example: "Each parent needs to sign the form.",
      audio: "./songs/Each parent needs to sign the form..mp3",
      image: "./images/Each parent needs to sign the form..png",
      meaning: "ér - Cada pai/mãe precisa assinar o formulário.",
    },
    {
      sentence: "er",
      example: "I gave the book to her.",
      audio: "./songs/I gave the book to her..mp3",
      image: "./images/I gave the book to her..png",
      meaning: "ãr - Eu dei o livro para ela.",
    },
    {
      sentence: "er",
      example: "The clerk helped me find the item. ",
      audio: "./songs/The clerk helped me find the item..mp3",
      image: "./images/The clerk helped me find the item..png",
      meaning: "ãr - O balconista me ajudou a encontrar o item.",
    },
    {
      sentence: "ir",
      example: "That bird sings every morning.",
      audio: "./songs/That bird sings every morning..mp3",
      image: "./images/That bird sings every morning..png",
      meaning: "ãr - Aquele pássaro canta todas as manhãs.",
    },
    {
      sentence: "ir",
      example: "We need to stay firm on our decision.",
      audio: "./songs/We need to stay firm on our decision..mp3",
      image: "./images/We need to stay firm on our decision..png",
      meaning: "ãr - Precisamos nos manter firmes em nossa decisão.",
    },
    {
      sentence: "ur",
      example: "She keeps her money in her purse.",
      audio: "./songs/She keeps her money in her purse..mp3",
      image: "./images/She keeps her money in her purse..png",
      meaning: "ãr - Ela guarda o dinheiro na bolsa.",
    },
    {
      sentence: "ur",
      example: "Our meeting is scheduled for Thursday.",
      audio: "./songs/Our meeting is scheduled for Thursday..mp3",
      image: "./images/Our meeting is scheduled for Thursday..png",
      meaning: "ãr - Nossa reunião está marcada para quinta-feira.",
    },
    {
      sentence: "ear",
      example: "The earth rotates around the sun.",
      audio: "./songs/The earth rotates around the sun..mp3",
      image: "./images/The earth rotates around the sun..png",
      meaning: "ãr - A Terra gira em torno do sol.",
    },
    {
      sentence: "ear",
      example: "You can learn a lot from your mistakes.",
      audio: "./songs/You can learn a lot from your mistakes..mp3",
      image: "./images/You can learn a lot from your mistakes..png",
      meaning: "ãr - Você pode aprender muito com seus erros.",
    },
    {
      sentence: "air",
      example: "I went outside to get some fresh air.",
      audio: "./songs/I went outside to get some fresh air..mp3",
      image: "./images/I went outside to get some fresh air..png",
      meaning: "ér - Eu fui para fora pegar um pouco de ar fresco.",
    },
    {
      sentence: "air",
      example: "The mechanic fixed the car repair.",
      audio: "./songs/The mechanic fixed the car repair..mp3",
      image: "./images/The mechanic fixed the car repair..png",
      meaning: "ér - O mecânico consertou o reparo do carro.",
    },
    {
      sentence: "ear",
      example: "I couldn't ear what they were saying.",
      audio: "./songs/I couldn't ear what they were saying..mp3",
      image: "./images/I couldn't ear what they were saying..png",
      meaning: "ir - Eu não conseguia ouvir o que eles estavam dizendo.",
    },
    {
      sentence: "ear",
      example: "Please come here and sit down.",
      audio: "./songs/Please come here and sit down..mp3",
      image: "./images/Please come here and sit down..png",
      meaning: "ir - Por favor, venha aqui e sente-se.",
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

