// Core game logic for PolyWordle
// Handles guess evaluation, letter state tracking, and win conditions.

export const TILE_STATES = {
  EMPTY: "empty",
  FILLED: "filled",
  CORRECT: "correct",     // Green - right letter, right position
  PRESENT: "present",     // Yellow - right letter, wrong position
  ABSENT: "absent",       // Gray - letter not in word
  PENDING: "pending",     // Being evaluated
};

/**
 * Evaluate a guess against the target word.
 * Returns an array of {letter, state} objects.
 * Handles duplicate letters correctly.
 */
export const evaluateGuess = (guess, target) => {
  const guessArr = [...guess.toUpperCase()];
  const targetArr = [...target.toUpperCase()];
  const result = guessArr.map(letter => ({ letter, state: TILE_STATES.ABSENT }));
  const targetUsed = targetArr.map(() => false);
  const guessUsed = guessArr.map(() => false);

  // First pass: mark correct positions
  guessArr.forEach((letter, i) => {
    if (letter === targetArr[i]) {
      result[i].state = TILE_STATES.CORRECT;
      targetUsed[i] = true;
      guessUsed[i] = true;
    }
  });

  // Second pass: mark present letters
  guessArr.forEach((letter, i) => {
    if (guessUsed[i]) return;
    for (let j = 0; j < targetArr.length; j++) {
      if (!targetUsed[j] && letter === targetArr[j]) {
        result[i].state = TILE_STATES.PRESENT;
        targetUsed[j] = true;
        break;
      }
    }
  });

  return result;
};

/**
 * Build keyboard letter state map from all guesses so far.
 * If a letter appears in multiple guesses, uses the "best" state.
 */
export const buildKeyboardState = (guessResults) => {
  const priority = {
    [TILE_STATES.CORRECT]: 3,
    [TILE_STATES.PRESENT]: 2,
    [TILE_STATES.ABSENT]: 1,
  };
  const state = {};
  guessResults.forEach(result => {
    result.forEach(({ letter, state: tileState }) => {
      const current = state[letter];
      if (!current || priority[tileState] > priority[current]) {
        state[letter] = tileState;
      }
    });
  });
  return state;
};

/**
 * Check if the player has won.
 */
export const isWin = (result) => result.every(t => t.state === TILE_STATES.CORRECT);

/**
 * Generate shareable emoji grid (like original Wordle).
 */
export const generateShareGrid = (guessResults, language, won) => {
  const emojiMap = {
    [TILE_STATES.CORRECT]: "🟩",
    [TILE_STATES.PRESENT]: "🟨",
    [TILE_STATES.ABSENT]: "⬜",
  };
  const header = `PolyWordle ${language.flag} ${language.name}\n${won ? guessResults.length : "X"}/${6}\n\n`;
  const grid = guessResults
    .map(row => row.map(t => emojiMap[t.state] || "⬜").join(""))
    .join("\n");
  return header + grid;
};

/**
 * Normalize a string for comparison (uppercase, trim whitespace).
 * Works for multi-script characters.
 */
export const normalize = (str) => str.trim().toUpperCase();

/**
 * Split a word into its constituent characters.
 * For CJK, each character is a unit. For Latin, each letter.
 */
export const splitWord = (word) => {
  // Use Unicode segmenter if available, else fallback to spread
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return [...segmenter.segment(word)].map(s => s.segment);
  }
  return [...word];
};
