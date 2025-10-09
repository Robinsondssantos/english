window.onload = function () {
  const dictionary = [
    {
      sentence: "",
      translation: "",
      audioLink: "",
      imagemLink: ""
    }
  ]


  00 Verbos Mais Utilizados em Inglês
#	Infinitivo (Simple Present)	Tradução	Simple Past (Passado Simples)	Past Participle (Usado no Present Perfect)	Tipo
1	to be	ser/estar	was / were	been	Irregular
2	to have	ter	had	had	Irregular
3	to do	fazer	did	done	Irregular
4	to say	dizer	said	said	Irregular
5	to go	ir	went	gone	Irregular
6	to get	pegar/obter/chegar	got	got / gotten (EUA)	Irregular
7	to make	fazer/criar	made	made	Irregular
8	to know	saber/conhecer	knew	known	Irregular
9	to think	pensar/achar	thought	thought	Irregular
10	to take	levar/pegar/tomar	took	taken	Irregular
11	to see	ver	saw	seen	Irregular
12	to come	vir	came	come	Irregular
13	to want	querer	wanted	wanted	Regular
14	to look	olhar	looked	looked	Regular
15	to use	usar	used	used	Regular
16	to find	achar/encontrar	found	found	Irregular
17	to give	dar	gave	given	Irregular
18	to tell	contar/dizer	told	told	Irregular
19	to work	trabalhar	worked	worked	Regular
20	to call	chamar/ligar	called	called	Regular
21	to try	tentar/experimentar	tried	tried	Regular
22	to ask	perguntar/pedir	asked	asked	Regular
23	to need	precisar	needed	needed	Regular
24	to feel	sentir	felt	felt	Irregular
25	to become	tornar-se	became	become	Irregular
26	to leave	deixar/partir	left	left	Irregular
27	to put	colocar	put	put	Irregular
28	to mean	significar/querer dizer	meant	meant	Irregular
29	to keep	manter/guardar	kept	kept	Irregular
30	to let	deixar/permitir	let	let	Irregular
31	to begin	começar	began	begun	Irregular
32	to help	ajudar	helped	helped	Regular
33	to talk	conversar/falar	talked	talked	Regular
34	to turn	virar/girar	turned	turned	Regular
35	to start	começar/iniciar	started	started	Regular
36	to show	mostrar	showed	shown / showed	Irregular
37	to hear	ouvir	heard	heard	Irregular
38	to play	jogar/brincar/tocar	played	played	Regular
39	to run	correr	ran	run	Irregular
40	to move	mover/mudar	moved	moved	Regular
41	to like	gostar	liked	liked	Regular
42	to live	viver/morar	lived	lived	Regular
43	to believe	acreditar	believed	believed	Regular
44	to hold	segurar	held	held	Irregular
45	to bring	trazer	brought	brought	Irregular
46	to happen	acontecer	happened	happened	Regular
47	to write	escrever	wrote	written	Irregular
48	to provide	fornecer/prover	provided	provided	Regular
49	to sit	sentar	sat	sat	Irregular
50	to stand	ficar em pé/suportar	stood	stood	Irregular
51	to lose	perder	lost	lost	Irregular
52	to pay	pagar	paid	paid	Irregular
53	to meet	encontrar/conhecer	met	met	Irregular
54	to include	incluir	included	included	Regular
55	to continue	continuar	continued	continued	Regular
56	to set	ajustar/colocar	set	set	Irregular
57	to learn	aprender	learned / learnt	learned / learnt	Regular/Irregular
58	to change	mudar/trocar	changed	changed	Regular
59	to lead	liderar/guiar	led	led	Irregular
60	to understand	entender	understood	understood	Irregular
61	to watch	assistir/observar	watched	watched	Regular
62	to follow	seguir	followed	followed	Regular
63	to stop	parar	stopped	stopped	Regular
64	to create	criar	created	created	Regular
65	to speak	falar	spoke	spoken	Irregular
66	to read	ler	read	read	Irregular
67	to allow	permitir	allowed	allowed	Regular
68	to add	adicionar/somar	added	added	Regular
69	to spend	gastar/passar (tempo)	spent	spent	Irregular
70	to grow	crescer	grew	grown	Irregular
71	to open	abrir	opened	opened	Regular
72	to walk	caminhar	walked	walked	Regular
73	to win	vencer/ganhar	won	won	Irregular
74	to offer	oferecer	offered	offered	Regular
75	to remember	lembrar	remembered	remembered	Regular
76	to love	amar	loved	loved	Regular
77	to consider	considerar	considered	considered	Regular
78	to buy	comprar	bought	bought	Irregular
79	to wait	esperar	waited	waited	Regular
80	to serve	servir	served	served	Regular
81	to send	enviar	sent	sent	Irregular
82	to build	construir	built	built	Irregular
83	to stay	ficar/permanecer	stayed	stayed	Regular
84	to fall	cair	fell	fallen	Irregular
85	to cut	cortar	cut	cut	Irregular
86	to reach	alcançar	reached	reached	Regular
87	to kill	matar	killed	killed	Regular
88	to remain	permanecer	remained	remained	Regular
89	to suggest	sugerir	suggested	suggested	Regular
90	to raise	levantar/aumentar	raised	raised	Regular
91	to pass	passar	passed	passed	Regular
92	to sell	vender	sold	sold	Irregular
93	to decide	decidir	decided	decided	Regular
94	to return	retornar/voltar	returned	returned	Regular
95	to explain	explicar	explained	explained	Regular
96	to hope	esperar (ter esperança)	hoped	hoped	Regular
97	to develop	desenvolver	developed	developed	Regular
98	to carry	carregar/transportar	carried	carried	Regular
99	to drive	dirigir	drove	driven	Irregular
100	to break	quebrar	broke	broken	Irregular


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

