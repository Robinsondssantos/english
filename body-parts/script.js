window.onload = function () {
  const dictionary = [
    {
      sentence: "Head",
      translation: "Cabeça",
      audio: "./songs/head.mp3",
      image: "./images/head.jpg"
    },
    {
      sentence: "Scalp",
      translation: "Couro cabeludo",
      audio: "./songs/scalp.mp3",
      image: "./images/scalp.jpg"
    },
    {
      sentence: "Hair",
      translation: "Cabelo",
      audio: "./songs/hair.mp3",
      image: "./images/hair.webp"
    },
    {
      sentence: "Forehead",
      translation: "Testa",
      audio: "./songs/forehead.mp3",
      image: "./images/forehead.jpg"
    },
    {
      sentence: "Eyebrow",
      translation: "Sobrancelha",
      audio: "./songs/eyebrow.mp3",
      image: "./images/eyebrow.jpg"
    },
    {
      sentence: "Eye",
      translation: "Olho",
      audio: "./songs/eye.mp3",
      image: "./images/eye.jpg"
    },
    {
      sentence: "Eyelid",
      translation: "Pálpebra",
      audio: "./songs/eyelid.mp3",
      image: "./images/eyelid.jpg"
    },
    {
      sentence: "Eyelashes",
      translation: "Cílios",
      audio: "./songs/eyelashes.mp3",
      image: "./images/eyelashes.jpg"
    },
    {
      sentence: "Ear",
      translation: "Orelha",
      audio: "./songs/ear.mp3",
      image: "./images/ear.jpg"
    },
    {
      sentence: "Nose",
      translation: "Nariz",
      audio: "./songs/nose.mp3",
      image: "./images/nose.webp"
    },
    {
      sentence: "Mouth",
      translation: "Boca",
      audio: "./songs/mouth.mp3",
      image: "./images/mouth.jpg"
    },
    {
      sentence: "Throat",
      translation: "Garganta",
      audio: "./songs/throat.mp3",
      image: "./images/throat.jpg"
    },
    {
      sentence: "Lips",
      translation: "Lábios",
      audio: "./songs/lips.mp3",
      image: "./images/lips.jpg"
    },
    {
      sentence: "Tooth",
      translation: "Dente",
      audio: "./songs/tooth.mp3",
      image: "./images/tooth.png"
    },
    {
      sentence: "Teeth",
      translation: "Dentes",
      audio: "./songs/teeth.mp3",
      image: "./images/teeth.png"
    },
    // {
    //   sentence: "Wisdom teeth",
    //   translation: "Dentes do siso",
    //   audio: "./songs/wisdom.mp3",
    //   image: "./images/face.jpg"
    // },
    {
      sentence: "Tongue",
      translation: "Língua",
      audio: "./songs/tongue.mp3",
      image: "./images/tongue.jpg"
    },
    {
      sentence: "Cheek",
      translation: "Bochecha",
      audio: "./songs/cheek.mp3",
      image: "./images/cheek.jpg"
    },
    {
      sentence: "Freckles",
      translation: "Sardas",
      audio: "./songs/freckles.mp3",
      image: "./images/freckles.jpg"
    },
    {
      sentence: "Face dimple",
      translation: "Covinhas do rosto",
      audio: "./songs/face.mp3",
      image: "./images/face.jpg"
    },
    {
      sentence: "Beard",
      translation: "Barba",
      audio: "./songs/beard.mp3",
      image: "./images/beard.jpg"
    },
    {
      sentence: "Moustache",
      translation: "Bigode ",
      audio: "./songs/moustache.mp3",
      image: "./images/moustache.webp"
    },
    {
      sentence: "Chin",
      translation: "Queixo",
      audio: "./songs/chin.mp3",
      image: "./images/chin.jpg"
    },
    {
      sentence: "Jaw",
      translation: "Mandíbula",
      audio: "./songs/jaw.mp3",
      image: "./images/jaw.jpg"
    },
    {
      sentence: "Body",
      translation: "Corpo",
      audio: "./songs/body.mp3",
      image: "./images/body.jpg"
    },
    {
      sentence: "Neck",
      translation: "Pescoço",
      audio: "./songs/neck.mp3",
      image: "./images/neck.jpg"
    },   
    // {
    //   sentence: "Adam’s apple",
    //   translation: "Pomo de adão",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },   
    {
      sentence: "Nape",
      translation: "Nuca",
      audio: "./songs/nape.mp3",
      image: "./images/nape.jpeg"
    },
    {
      sentence: "Shoulder",
      translation: "Ombro",
      audio: "./songs/shoulder.mp3",
      image: "./images/shoulder.jpg"
    },
    {
      sentence: "Armpit",
      translation: "Axila",
      audio: "./songs/armpit.mp3",
      image: "./images/armpit.webp"
    },
    {
      sentence: "Chest",
      translation: "Peito",
      audio: "./songs/chest.mp3",
      image: "./images/chest.jpg"
    },
    {
      sentence: "Nipple",
      translation: "Mamilo",
      audio: "./songs/nipple.mp3",
      image: "./images/nipple.jpg"
    },
    {
      sentence: "Arm",
      translation: "Braço",
      audio: "./songs/arm.mp3",
      image: "./images/arm.webp"
    },
    {
      sentence: "Elbow",
      translation: "Cotovelo",
      audio: "./songs/elbow.mp3",
      image: "./images/elbow.png"
    },
    {
      sentence: "Forearm",
      translation: "Antebraço",
      audio: "./songs/forearm.mp3",
      image: "./images/forearm.webp"
    },
    {
      sentence: "Wrist",
      translation: "Pulso",
      audio: "./songs/wrist.mp3",
      image: "./images/wrist.jpg"
    },
    {
      sentence: "Fist",
      translation: "Punho",
      audio: "./songs/fist.mp3",
      image: "./images/fist.png"
    },
    {
      sentence: "Hand",
      translation: "Mão",
      audio: "./songs/hand.mp3",
      image: "./images/hand.jpg"
    },
    {
      sentence: "Palm",
      translation: "Palma da mão",
      audio: "./songs/palm.mp3",
      image: "./images/palm.jpg"
    },
    // {
    //   sentence: "Thumb finger",
    //   translation: "Dedo polegar",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },
    // {
    //   sentence: "Pointer finger",
    //   translation: "Dedo indicador",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },
    // {
    //   sentence: "Middle finger",
    //   translation: "Dedo médio",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },
    // {
    //   sentence: "Ring finger",
    //   translation: "Dedo anelar",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },
    // {
    //   sentence: "Pinky finger",
    //   translation: "Dedo mindinho",
    //   audio: "./songs/jaw.mp3",
    //   image: "./images/face.jpg"
    // },
    {
      sentence: "Knuckle",
      translation: "Junta",
      audio: "./songs/knuckle.mp3",
      image: "./images/knuckle.jpg"
    }
  ]

  // https://www.openenglish.com.br/blog/partes-do-corpo-em-ingles/




  // Nails – Unhas
  // Breast/breasts – Seio/Seios
  // Waist – Cintura
  // Belly – Barriga
  // Bellybutton – Umbigo
  // Back – Costas
  // Low back – Lombar
  // Hip – Quadril
  // Buttocks – Nádegas
  // Groin – Virilha
  // Thighs – Coxas
  // Knee/knees – Joelho/joelhos
  // Calf – Panturrilha
  // Shin – Canela
  // Ankle/ankles – Tornozelo/Tornozelos
  // Foot/Feet – Pé/Pés
  // Toe – Dedo do pé
  // Finger/fingers – Dedo/Dedos
  // Heel – Calcanhar
  // Sole – Sola do pé


  // Brain – Cérebro
  // Pharynx – Faringe
  // Larynx – Laringe
  // Thyroid – Tireóide
  // Heart – Coração
  // Lung/Lungs – Pulmão/Pulmões
  // Pancreas – Pâncreas
  // Liver – Fígado
  // Spleen – Baço
  // Ribs – Costelas
  // Stomach – Estômago
  // Intestine – Intestino
  // Appendix – Apêndice
  // Kidney/Kidneys – Rim/Rins
  // Bladder – Bexiga
  // Uterus – Útero
  // Skin – Pele
  // Muscle/muscles – Músculo/músculos
  // Bone/bones – Osso/ossos
  // Skeleton – Esqueleto
  // Spine – Espinha
  // Blood – Sangue


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

    const image = document.getElementById("image");
    const audio = document.getElementById("audio");
    // audio.src = './songs/beard.mp3';
    // audio.load();

    const btnPlayer = document.getElementById("btn-player");
    btnPlayer.onclick = () => { audio.play(); };

    let counter = 0;
    let score = 0;

    const randomInteger = getRandomInteger(0, dictionary.length - 1);
    // console.log('randomInteger:', randomInteger);
    let _word = getWord(dictionary, randomInteger);
    let word = _word.sentence;
    let translation = _word.translation;
    image.src = _word.image;
    audio.src = _word.audio;
    audio.load();
    // btnPlayer.click();
    // audio.play();

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

      const randomInteger = getRandomInteger(0, dictionary.length - 1);
      _word = getWord(dictionary, randomInteger);
      word = _word.sentence;
      translation = _word.translation;
      image.src = _word.image;
      audio.src = _word.audio;
      audio.load();
      audio.play();

      showWord(wordElement, word);      
      showTranslation(translationElement, translation);
      showScore(scoreElement, score);
      showCounter(counterElement, counter);
      clearAndFocusElement(answerElement);
    }
  }

  main();
}

