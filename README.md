# 🌍 PolyWordle

**Wordle × Language Learning** — Guess the word in any language, learn vocabulary with every play.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## What is this?

PolyWordle is an open-source word-guessing game (à la Wordle) that works across 9+ languages. The twist: every game teaches you something. Each word comes with:

- ✅ A **translation** into English
- 💡 A **contextual hint** you can reveal mid-game
- 📖 An **example sentence** with translation shown after each round
- 🎹 A **language-native keyboard** (Armenian, Japanese, Korean, CJK, and more)
- 🔄 Daily word mode + practice mode

**Languages included:** 🇦🇲 Armenian · 🇪🇸 Spanish · 🇫🇷 French · 🇩🇪 German · 🇮🇹 Italian · 🇧🇷 Portuguese · 🇯🇵 Japanese · 🇰🇷 Korean · 🇨🇳 Mandarin

---


## 💻 Running locally

### Prerequisites
- [Node.js 18+](https://nodejs.org/) — download and install this first
- A terminal (Terminal on Mac, Command Prompt or PowerShell on Windows)

### Steps
```bash
# 1. Install dependencies (do this once)
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

### Build for production
```bash
npm run build    # creates a dist/ folder
npm run preview  # preview the production build locally
```

---

## 📁 Project structure

```
polywordle/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # Auto-deploys to GitHub Pages on push
│   └── ISSUE_TEMPLATE/
│       ├── new_language.md     # Template for adding a language
│       └── bug_report.md
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── data/
│   │   └── languages.js        # All language configs & word lists ← edit this to add languages
│   ├── hooks/
│   │   └── useGame.js          # Game state logic
│   └── utils/
│       └── gameLogic.js        # Guess evaluation, share grid
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── LICENSE
├── README.md
└── CONTRIBUTING.md
```

---

## 🌐 Adding a new language

This is the #1 contribution we want! Open `src/data/languages.js` and add your language:

```js
your_language: {
  code: "xx",           // ISO 639-1 language code
  name: "English name",
  nativeName: "Native name",
  flag: "🏳️",
  wordLength: 5,        // characters per guess
  direction: "ltr",     // "ltr" or "rtl"
  maxGuesses: 6,
  keyboard: [
    ["A","B","C","D","E","F","G","H","I","J"],
    ["K","L","M","N","O","P","Q","R","S"],
    ["ENTER","T","U","V","W","X","Y","Z","⌫"]
  ],
  words: [
    {
      word: "HELLO",
      translation: "greeting",
      hint: "What you say when meeting someone",
      example: "Hello, how are you?",
      exampleTranslation: "..."
    },
    // Add at least 10 words
  ]
}
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

---

## 🤝 Contributing

Contributions welcome! Especially:
- 🌐 New languages (open an issue first to claim one)
- 📚 More words for existing languages
- 🌍 RTL language support (Arabic, Hebrew, Farsi, Urdu)
- ♿ Accessibility improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © 2024 PolyWordle Contributors

Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/index.html) by Josh Wardle.
