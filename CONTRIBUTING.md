# Contributing to PolyWordle

Thank you for wanting to help! The most valuable thing you can do is add a new language or expand an existing word list. Here's everything you need to know.

---

## Quick Start

1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/polywordle.git`
3. Install: `npm install`
4. Create a branch: `git checkout -b add-hindi`
5. Make your changes
6. Test locally: `npm run dev`
7. Open a pull request

---

## Adding a New Language (Recommended Contribution)

This is the most impactful thing you can do. It takes about 30–60 minutes and requires no special coding knowledge.

### Step 1: Edit `src/data/languages.js`

Add your language to the `LANGUAGES` object. Use this template:

```js
hindi: {
  code: "hi",
  name: "Hindi",
  nativeName: "हिन्दी",
  flag: "🇮🇳",
  wordLength: 4,
  direction: "ltr",      // use "rtl" for Arabic, Hebrew, Farsi, Urdu
  maxGuesses: 6,

  keyboard: [
    // Each sub-array is a keyboard row
    // Include "ENTER" and "⌫" somewhere in the last row
    ["क","ख","ग","घ","च","छ","ज","झ","ट","ठ"],
    ["ड","ढ","त","थ","द","ध","न","प","फ","ब"],
    ["ENTER","भ","म","य","र","ल","व","श","ष","स","ह","⌫"]
  ],

  words: [
    {
      word: "नमस्ते",
      translation: "hello / greetings",
      hint: "The classic Indian greeting",
      example: "नमस्ते, आप कैसे हैं?",
      exampleTranslation: "Hello, how are you?"
    },
    // Add at least 10 words total
  ]
}
```

### Step 2: Word guidelines

Words should be:
- **Common** — words a beginner or tourist would actually use (A1–B1 CEFR level)
- **Interesting** — culturally meaningful, not just "apple" and "book" every time
- **Correctly spelled** — double-check against a dictionary source
- **Appropriately sized** — match the `wordLength` you declared

Avoid:
- Proper nouns (names, places)
- Offensive or inappropriate words
- Words with highly ambiguous translations

### Step 3: Word list sources

Recommended sources for finding good vocabulary:
- [Wiktionary Frequency Lists](https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists)
- [OPUS Corpus](https://opus.nlpl.eu/)
- [CC-CEDICT](https://cc-cedict.org/) — Mandarin
- [JMdict / EDICT](https://www.edrdg.org/jmdict/) — Japanese
- [OpenSubtitles word frequency](https://github.com/hermitdave/FrequencyWords)

### Step 4: Test it

Run `npm run dev` and select your language in the picker. Play a few games and make sure:
- The keyboard renders correctly
- Tiles display characters at the right size
- Guess checking works (especially for non-Latin scripts)
- The hint, example, and translation all display

---

## Adding Words to Existing Languages

Simply open `src/data/languages.js`, find your language's `words` array, and add entries following the existing format. Minimum 10 words per language, we aim for 30+.

---

## Bug Reports

Open an issue with:
- What language / browser / device
- What you expected
- What actually happened
- A screenshot if helpful

---

## Code Style

- Functional React components
- No external state management libraries (hooks only)
- Keep `gameLogic.js` pure functions (no React imports)
- Comments in English

---

## PR Checklist

Before opening a PR, confirm:

- [ ] `npm run dev` works without errors
- [ ] New language has at least 10 words with all fields
- [ ] All word objects have `word`, `translation`, `hint`, `example`, `exampleTranslation`
- [ ] `wordLength` matches the actual character count of every word
- [ ] Keyboard includes `ENTER` and `⌫`
- [ ] You tested it in the browser

---

## Questions?

Open an issue with the label `question`. We're friendly and welcome beginners.
