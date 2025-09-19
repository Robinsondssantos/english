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
    'Abundant',
    'Acquire',
    'Adequate',
    'Admire',
    'Advocate',
    'Alleviate',
    'Ambiguous',
    'Ambitious',
    'Ample',
    'Analyze',
    'Anticipate',
    'Appreciate',
    'Appropriate',
    'Approximate',
    'Aspire',
    'Assume',
    'Astonishing',
    'Authentic',
    'Aware',
    'Balanced',
    'Benefit',
    'Brilliant',
    'Capable',
    'Certain',
    'Clarify',
    'Coherent',
    'Commonplace',
    'Comprehensive',
    'Conceal',
    'Conclude',
    'Confident',
    'Considerable',
    'Consistent',
    'Constructive',
    'Controversial',
    'Convenient',
    'Conventional',
    'Convincing',
    'Crucial',
    'Curious',
    'Debatable',
    'Decent',
    'Decline',
    'Deliberate',
    'Demonstrate',
    'Dependable',
    'Desirable',
    'Determine',
    'Diligent',
    'Distinct',
    'Diverse',
    'Durable',
    'Efficient',
    'Elaborate',
    'Emphasize',
    'Enable',
    'Encourage',
    'Endure',
    'Engage',
    'Enhance',
    'Enormous',
    'Essential',
    'Esteem',
    'Evaluate',
    'Evident',
    'Exceed',
    'Exquisite',
    'Facilitate',
    'Fascinating',
    'Feasible',
    'Flourish',
    'Fortunate',
    'Genuine',
    'Gratitude',
    'Harmonious',
    'Highlight',
    'Illustrate',
    'Impact',
    'Imply',
    'Improve',
    'Insight',
    'Inspire',
    'Integrity',
    'Intriguing',
    'Justify',
    'Knowledgeable',
    'Logical',
    'Magnificent',
    'Meaningful',
    'Modest',
    'Noteworthy',
    'Numerous',
    'Objective',
    'Overcome',
    'Persuasive',
    'Precise',
    'Profound',
    'Reliable',
    'Significant',
    'Substantial',
  ];

  let translatedWords = [
    'Abundante',
    'Adquirir',
    'Adequado',
    'Admirar',
    'Defender / Advogar',
    'Aliviar',
    'Ambíguo',
    'Ambicioso',
    'Amplo / De sobra',
    'Analisar',
    'Antecipar / Esperar (que algo aconteça)',
    'Apreciar / Valorizar',
    'Apropriado',
    'Aproximado',
    'Almejar',
    'Presumir / Assumir',
    'Surpreendente',
    'Autêntico',
    'Ciente',
    'Equilibrado',
    'Benefício',
    'Brilhante',
    'Capaz',
    'Certo / Determinado',
    'Esclarecer',
    'Coerente',
    'Comum / Banal',
    'Abrangente',
    'Ocultar',
    'Concluir',
    'Confiante',
    'Considerável',
    'Consistente',
    'Construtivo',
    'Controverso',
    'Conveniente',
    'Convencional',
    'Convincente',
    'Crucial / Essencial',
    'Curioso',
    'Debatível / Questionável',
    'Decente',
    'Recusar / Declínio',
    'Deliberado / Intencional',
    'Demonstrar',
    'Confiável',
    'Desejável',
    'Determinar',
    'Diligente / Aplicado',
    'Distinto / Diferente',
    'Diverso',
    'Durável',
    'Eficiente',
    'Elaborado / Detalhar',
    'Enfatizar',
    'Possibilitar',
    'Encorajar / Incentivar',
    'Suportar / Resistir',
    'Engajar-se / Envolver',
    'Melhorar / Ampliar',
    'Enorme',
    'Essencial',
    'Estima / Apreço',
    'Avaliar',
    'Evidente',
    'Exceder / Ultrapassar',
    'Exquisito / Refinado',
    'Facilitar',
    'Fascinante',
    'Viável',
    'Florescer / Prosperar',
    'Afortunado / Sortudo',
    'Genuíno / Verdadeiro',
    'Gratidão',
    'Harmonioso',
    'Destacar / Destaque',
    'Ilustrar',
    'Impacto / Impactar',
    'Implicar / Sugerir',
    'Melhorar',
    'Percepção / Compreensão profunda',
    'Inspirar',
    'Integridade',
    'Intrigante',
    'Justificar',
    'Bem-informado / Sábio',
    'Lógico',
    'Magnífico',
    'Significativo',
    'Modesto',
    'Notável / Digno de nota',
    'Numeroso / Muitos',
    'Objetivo / Imparcial',
    'Superar',
    'Persuasivo',
    'Preciso',
    'Profundo',
    'Confiável',
    'Significativo',
    'Substancial / Considerável',
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

