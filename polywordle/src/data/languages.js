// PolyWordle Language Configurations
// Each language entry defines words, keyboard layout, display metadata, and learning hints.
// To add a new language, copy the structure below and add to the LANGUAGES object.

export const LANGUAGES = {
  spanish: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    wordLength: 5,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["Q","W","E","R","T","Y","U","I","O","P"],
      ["A","S","D","F","G","H","J","K","L","Ñ"],
      ["ENTER","Z","X","C","V","B","N","M","⌫"]
    ],
    words: [
      { word: "GATOS", translation: "cats", hint: "Plural of 'gato' (cat)", example: "Los gatos duermen mucho.", exampleTranslation: "Cats sleep a lot." },
      { word: "PLAYA", translation: "beach", hint: "Where waves meet the shore", example: "Vamos a la playa.", exampleTranslation: "We're going to the beach." },
      { word: "CIELO", translation: "sky / heaven", hint: "Look up on a clear day", example: "El cielo está azul.", exampleTranslation: "The sky is blue." },
      { word: "LIBRO", translation: "book", hint: "You read it", example: "Estoy leyendo un libro.", exampleTranslation: "I am reading a book." },
      { word: "PERRO", translation: "dog", hint: "Man's best friend", example: "Mi perro se llama Max.", exampleTranslation: "My dog is named Max." },
      { word: "VERDE", translation: "green", hint: "The color of grass", example: "La manzana es verde.", exampleTranslation: "The apple is green." },
      { word: "FUEGO", translation: "fire", hint: "Hot and bright", example: "Hay fuego en la chimenea.", exampleTranslation: "There is fire in the fireplace." },
      { word: "DULCE", translation: "sweet", hint: "Like candy or sugar", example: "El mango es muy dulce.", exampleTranslation: "The mango is very sweet." },
      { word: "NOCHE", translation: "night", hint: "When stars appear", example: "Buenas noches.", exampleTranslation: "Good night." },
      { word: "HABLA", translation: "speaks / speech", hint: "What you do with words", example: "Ella habla español.", exampleTranslation: "She speaks Spanish." },
      { word: "CALLE", translation: "street", hint: "Where cars drive", example: "Cruza la calle.", exampleTranslation: "Cross the street." },
      { word: "FLORE", translation: "flowers", hint: "Bloom in spring", example: "Las flores son bonitas.", exampleTranslation: "The flowers are beautiful." },
      { word: "MADRE", translation: "mother", hint: "A loving parent", example: "Mi madre cocina bien.", exampleTranslation: "My mother cooks well." },
      { word: "FINCA", translation: "farm / estate", hint: "Rural property", example: "Tenemos una finca en el campo.", exampleTranslation: "We have a farm in the countryside." },
      { word: "MUNDO", translation: "world", hint: "The whole planet", example: "Viajo por el mundo.", exampleTranslation: "I travel the world." },
    ]
  },

  french: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    wordLength: 5,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["A","Z","E","R","T","Y","U","I","O","P"],
      ["Q","S","D","F","G","H","J","K","L","M"],
      ["ENTER","W","X","C","V","B","N","⌫"]
    ],
    words: [
      { word: "AMOUR", translation: "love", hint: "The most powerful emotion", example: "L'amour est aveugle.", exampleTranslation: "Love is blind." },
      { word: "BELLE", translation: "beautiful (f)", hint: "Feminine form of beautiful", example: "Elle est très belle.", exampleTranslation: "She is very beautiful." },
      { word: "CHIEN", translation: "dog", hint: "A loyal pet", example: "Mon chien est gentil.", exampleTranslation: "My dog is kind." },
      { word: "ROUGE", translation: "red", hint: "The color of roses", example: "La rose est rouge.", exampleTranslation: "The rose is red." },
      { word: "BLANC", translation: "white", hint: "The color of snow", example: "Le ciel est blanc.", exampleTranslation: "The sky is white." },
      { word: "PORTE", translation: "door", hint: "You open it to enter", example: "Ferme la porte.", exampleTranslation: "Close the door." },
      { word: "LIVRE", translation: "book", hint: "Full of stories", example: "J'aime lire un livre.", exampleTranslation: "I love reading a book." },
      { word: "SOLEI", translation: "sun", hint: "It shines every day", example: "Le soleil brille.", exampleTranslation: "The sun is shining." },
      { word: "FLEUR", translation: "flower", hint: "Blooms in spring", example: "Cette fleur est jolie.", exampleTranslation: "This flower is pretty." },
      { word: "NOIRE", translation: "black (f)", hint: "Darkest color", example: "La nuit est noire.", exampleTranslation: "The night is black." },
      { word: "ARBRE", translation: "tree", hint: "Has leaves and roots", example: "L'arbre est grand.", exampleTranslation: "The tree is tall." },
      { word: "TABLE", translation: "table", hint: "Furniture for eating", example: "Mange à la table.", exampleTranslation: "Eat at the table." },
      { word: "HOMME", translation: "man", hint: "Adult male person", example: "L'homme est grand.", exampleTranslation: "The man is tall." },
      { word: "MONDE", translation: "world", hint: "Everything around us", example: "Le monde est grand.", exampleTranslation: "The world is big." },
      { word: "ENFAN", translation: "child", hint: "Young human", example: "L'enfant joue dehors.", exampleTranslation: "The child plays outside." },
    ]
  },

  japanese: {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    wordLength: 4,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["あ","い","う","え","お"],
      ["か","き","く","け","こ"],
      ["さ","し","す","せ","そ"],
      ["た","ち","つ","て","と"],
      ["な","に","ぬ","ね","の"],
      ["は","ひ","ふ","へ","ほ"],
      ["ま","み","む","め","も"],
      ["や","ゆ","よ","ら","り"],
      ["ENTER","る","れ","ろ","わ","を","ん","⌫"]
    ],
    words: [
      { word: "はなび", translation: "fireworks", hint: "Lit: 'flower fire'", example: "はなびがきれいです。", exampleTranslation: "The fireworks are beautiful." },
      { word: "さくら", translation: "cherry blossom", hint: "Japan's most beloved flower", example: "さくらがさきました。", exampleTranslation: "The cherry blossoms have bloomed." },
      { word: "うみべ", translation: "seaside", hint: "Where ocean meets land", example: "うみべをさんぽする。", exampleTranslation: "I walk along the seaside." },
      { word: "そらに", translation: "in the sky", hint: "Location above us", example: "そらにほしがある。", exampleTranslation: "There are stars in the sky." },
      { word: "ねこか", translation: "cat (question)", hint: "Asking about a cat", example: "これはねこか？", exampleTranslation: "Is this a cat?" },
      { word: "みずを", translation: "water (object)", hint: "Drink this every day", example: "みずをのむ。", exampleTranslation: "I drink water." },
      { word: "はるか", translation: "far away / Haruka", hint: "Distance or a name", example: "はるかなくにへ。", exampleTranslation: "To a faraway land." },
      { word: "きもの", translation: "kimono", hint: "Traditional Japanese garment", example: "きものをきる。", exampleTranslation: "I wear a kimono." },
    ]
  },

  german: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    wordLength: 5,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["Q","W","E","R","T","Z","U","I","O","P","Ü"],
      ["A","S","D","F","G","H","J","K","L","Ö","Ä"],
      ["ENTER","Y","X","C","V","B","N","M","⌫"]
    ],
    words: [
      { word: "HUNDE", translation: "dogs", hint: "Plural of Hund", example: "Die Hunde spielen.", exampleTranslation: "The dogs are playing." },
      { word: "SCHÖN", translation: "beautiful / nice", hint: "Something pleasing to look at", example: "Das Wetter ist schön.", exampleTranslation: "The weather is beautiful." },
      { word: "WASSER", translation: "water", hint: "Essential liquid for life", example: "Ich trinke Wasser.", exampleTranslation: "I drink water." },
      { word: "BLUME", translation: "flower", hint: "Plants with petals", example: "Die Blume ist rot.", exampleTranslation: "The flower is red." },
      { word: "STERN", translation: "star", hint: "Shines in the night sky", example: "Der Stern leuchtet.", exampleTranslation: "The star is shining." },
      { word: "STADT", translation: "city", hint: "Urban settlement", example: "Die Stadt ist groß.", exampleTranslation: "The city is big." },
      { word: "ABEND", translation: "evening", hint: "Time before night", example: "Guten Abend!", exampleTranslation: "Good evening!" },
      { word: "LIEBE", translation: "love", hint: "Deep affection", example: "Ich liebe dich.", exampleTranslation: "I love you." },
      { word: "BITTE", translation: "please / you're welcome", hint: "Polite word", example: "Bitte sehr.", exampleTranslation: "You're welcome." },
      { word: "KATZE", translation: "cat", hint: "Meows and purrs", example: "Die Katze schläft.", exampleTranslation: "The cat is sleeping." },
      { word: "FEUER", translation: "fire", hint: "Hot and bright", example: "Das Feuer brennt.", exampleTranslation: "The fire is burning." },
      { word: "TRAUM", translation: "dream", hint: "What happens when you sleep", example: "Das ist ein schöner Traum.", exampleTranslation: "That is a beautiful dream." },
    ]
  },

  portuguese: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇧🇷",
    wordLength: 5,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["Q","W","E","R","T","Y","U","I","O","P"],
      ["A","S","D","F","G","H","J","K","L","Ç"],
      ["ENTER","Z","X","C","V","B","N","M","⌫"]
    ],
    words: [
      { word: "CHUVA", translation: "rain", hint: "Falls from clouds", example: "A chuva está caindo.", exampleTranslation: "The rain is falling." },
      { word: "PRAIA", translation: "beach", hint: "Sandy shore by the sea", example: "Vamos à praia!", exampleTranslation: "Let's go to the beach!" },
      { word: "VERDE", translation: "green", hint: "Color of forest and grass", example: "A floresta é verde.", exampleTranslation: "The forest is green." },
      { word: "CORAÇÃO", translation: "heart", hint: "Pumps your blood", example: "Meu coração é seu.", exampleTranslation: "My heart is yours." },
      { word: "NOITE", translation: "night", hint: "When stars appear", example: "Boa noite!", exampleTranslation: "Good night!" },
      { word: "MUNDO", translation: "world", hint: "Planet Earth", example: "O mundo é grande.", exampleTranslation: "The world is big." },
      { word: "SONHO", translation: "dream", hint: "What you see when you sleep", example: "Tive um sonho.", exampleTranslation: "I had a dream." },
      { word: "CAMPO", translation: "field / countryside", hint: "Open land", example: "O campo é bonito.", exampleTranslation: "The countryside is beautiful." },
      { word: "PEDRA", translation: "stone / rock", hint: "Solid and heavy", example: "A pedra é dura.", exampleTranslation: "The stone is hard." },
      { word: "BRISA", translation: "breeze", hint: "Gentle wind", example: "A brisa do mar é suave.", exampleTranslation: "The sea breeze is gentle." },
    ]
  },

  italian: {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    wordLength: 5,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["Q","W","E","R","T","Y","U","I","O","P"],
      ["A","S","D","F","G","H","J","K","L"],
      ["ENTER","Z","X","C","V","B","N","M","⌫"]
    ],
    words: [
      { word: "AMORE", translation: "love", hint: "The Italian word for love", example: "L'amore è tutto.", exampleTranslation: "Love is everything." },
      { word: "BELLA", translation: "beautiful (f)", hint: "Feminine beauty", example: "Che bella giornata!", exampleTranslation: "What a beautiful day!" },
      { word: "PASTA", translation: "pasta", hint: "Italy's most famous food", example: "La pasta è deliziosa.", exampleTranslation: "The pasta is delicious." },
      { word: "VENTO", translation: "wind", hint: "Moving air", example: "Il vento soffia forte.", exampleTranslation: "The wind blows strong." },
      { word: "NOTTE", translation: "night", hint: "After sunset", example: "Buona notte!", exampleTranslation: "Good night!" },
      { word: "FIORE", translation: "flower", hint: "Blooms in spring", example: "Il fiore è bello.", exampleTranslation: "The flower is beautiful." },
      { word: "CARTA", translation: "paper / card / map", hint: "Write on it", example: "Hai una carta?", exampleTranslation: "Do you have a map?" },
      { word: "SOGNO", translation: "dream", hint: "Night visions", example: "Ho fatto un sogno.", exampleTranslation: "I had a dream." },
      { word: "TERRA", translation: "earth / ground / land", hint: "Beneath your feet", example: "La terra è fertile.", exampleTranslation: "The earth is fertile." },
      { word: "FORTE", translation: "strong / loud", hint: "Powerful", example: "Sei molto forte.", exampleTranslation: "You are very strong." },
    ]
  },

  korean: {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    wordLength: 3,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ"],
      ["ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ"],
      ["ENTER","ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","⌫"]
    ],
    words: [
      { word: "하늘", translation: "sky", hint: "Look up to see it", example: "하늘이 파래요.", exampleTranslation: "The sky is blue." },
      { word: "바다", translation: "sea / ocean", hint: "Vast body of salt water", example: "바다가 넓어요.", exampleTranslation: "The ocean is wide." },
      { word: "사랑", translation: "love", hint: "The deepest affection", example: "사랑해요.", exampleTranslation: "I love you." },
      { word: "꽃잎", translation: "petal", hint: "Part of a flower", example: "꽃잎이 떨어져요.", exampleTranslation: "The petals are falling." },
      { word: "빛깔", translation: "color / hue", hint: "What you see with your eyes", example: "빛깔이 예뻐요.", exampleTranslation: "The color is pretty." },
      { word: "나무", translation: "tree", hint: "Has branches and roots", example: "나무가 커요.", exampleTranslation: "The tree is big." },
      { word: "별빛", translation: "starlight", hint: "Light from stars", example: "별빛이 반짝여요.", exampleTranslation: "The starlight twinkles." },
    ]
  },

  mandarin: {
    code: "zh",
    name: "Mandarin",
    nativeName: "普通话",
    flag: "🇨🇳",
    wordLength: 2,
    direction: "ltr",
    maxGuesses: 6,
    keyboard: [
      ["a","o","e","i","u","ü"],
      ["b","p","m","f","d","t","n","l"],
      ["g","k","h","j","q","x"],
      ["ENTER","zh","ch","sh","r","z","c","s","y","w","⌫"]
    ],
    words: [
      { word: "美丽", translation: "beautiful", hint: "Describes great beauty", example: "她很美丽。", exampleTranslation: "She is very beautiful." },
      { word: "朋友", translation: "friend", hint: "Someone close to you", example: "他是我的朋友。", exampleTranslation: "He is my friend." },
      { word: "天空", translation: "sky", hint: "Above the clouds", example: "天空是蓝色的。", exampleTranslation: "The sky is blue." },
      { word: "音乐", translation: "music", hint: "Sound that moves the soul", example: "我喜欢音乐。", exampleTranslation: "I like music." },
      { word: "快乐", translation: "happy / happiness", hint: "Joyful feeling", example: "我很快乐。", exampleTranslation: "I am very happy." },
      { word: "水果", translation: "fruit", hint: "Sweet edible plant product", example: "水果很甜。", exampleTranslation: "The fruit is sweet." },
      { word: "梦想", translation: "dream / aspiration", hint: "What you hope to achieve", example: "我有很多梦想。", exampleTranslation: "I have many dreams." },
      { word: "星星", translation: "stars", hint: "Twinkle in the night sky", example: "星星很亮。", exampleTranslation: "The stars are bright." },
    ]
  }
};

LANGUAGES.armenian = {
  code: "hy",
  name: "Armenian",
  nativeName: "Հայերեն",
  flag: "🇦🇲",
  wordLength: 4,
  direction: "ltr",
  maxGuesses: 6,
  keyboard: [
    ["Ա","Բ","Գ","Դ","Ե","Զ","Է","Ը","Թ","Ժ"],
    ["Ի","Լ","Խ","Ծ","Կ","Հ","Ձ","Ղ","Ճ","Մ"],
    ["ENTER","Յ","Ն","Շ","Ո","Չ","Պ","Ջ","Ռ","Ս","Վ","Տ","Ր","Ց","Փ","Ք","Օ","Ֆ","⌫"]
  ],
  words: [
    { word: "ԱՍՏՂ", translation: "star", hint: "Shines in the night sky", example: "Աստղերը փայլում են:", exampleTranslation: "The stars are shining." },
    { word: "ԾԱՂԿ", translation: "flower", hint: "Blooms in spring, smells sweet", example: "Ծաղիկները գեղեցիկ են:", exampleTranslation: "The flowers are beautiful." },
    { word: "ԼԵՌՆ", translation: "mountain", hint: "Armenia is full of these", example: "Լեռները բարձր են:", exampleTranslation: "The mountains are high." },
    { word: "ԱՐԵՎ", translation: "sun", hint: "Rises every morning", example: "Արևը շողում է:", exampleTranslation: "The sun is shining." },
    { word: "ՍԵՐ", translation: "love", hint: "The deepest feeling", example: "Սերը կյանք է:", exampleTranslation: "Love is life." },
    { word: "ՋՈՒՐ", translation: "water", hint: "You drink it every day", example: "Ջուրը մաքուր է:", exampleTranslation: "The water is clean." },
    { word: "ՀԱՑ", translation: "bread", hint: "Lavash is Armenia's famous kind", example: "Հացը թարմ է:", exampleTranslation: "The bread is fresh." },
    { word: "ԴՊՐ", translation: "school", hint: "Where children learn", example: "Դպրոցը մոտ է:", exampleTranslation: "The school is nearby." },
    { word: "ԱՂՋ", translation: "girl", hint: "Young female person", example: "Աղջիկը երգում է:", exampleTranslation: "The girl is singing." },
    { word: "ԳԻՐՔ", translation: "book", hint: "You read it for learning or pleasure", example: "Գիրքը հետաքրքիր է:", exampleTranslation: "The book is interesting." },
    { word: "ԿԱՆԱՉ", translation: "green", hint: "Color of the forest and spring", example: "Կանաչ ծառեր կան:", exampleTranslation: "There are green trees." },
    { word: "ՄԱՅ", translation: "mother", hint: "Your female parent", example: "Մայրս սիրում է ինձ:", exampleTranslation: "My mother loves me." },
  ]
};

export const getLanguage = (code) => LANGUAGES[code] || LANGUAGES.spanish;

export const getDailyWord = (language) => {
  const words = language.words;
  const today = new Date();
  const dayIndex = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return words[dayIndex % words.length];
};

export const getRandomWord = (language) => {
  return language.words[Math.floor(Math.random() * language.words.length)];
};
