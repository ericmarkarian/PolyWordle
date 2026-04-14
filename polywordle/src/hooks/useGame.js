import { useState, useCallback, useEffect } from "react";
import { evaluateGuess, buildKeyboardState, isWin, TILE_STATES, splitWord } from "../utils/gameLogic";
import { getDailyWord } from "../data/languages";

export const useGame = (language) => {
  const [targetData, setTargetData] = useState(null);
  const [guesses, setGuesses] = useState([]);         // Array of strings
  const [guessResults, setGuessResults] = useState([]); // Array of result arrays
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameState, setGameState] = useState("playing"); // "playing" | "won" | "lost"
  const [keyboardState, setKeyboardState] = useState({});
  const [shakeRow, setShakeRow] = useState(false);
  const [revealRow, setRevealRow] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState(null);

  const wordLength = language.wordLength;
  const maxGuesses = language.maxGuesses;

  // Initialize or reset game when language changes
  useEffect(() => {
    const daily = getDailyWord(language);
    setTargetData(daily);
    setGuesses([]);
    setGuessResults([]);
    setCurrentGuess("");
    setGameState("playing");
    setKeyboardState({});
    setRevealRow(null);
    setShowHint(false);
    setMessage(null);
  }, [language.code]);

  const showMessage = useCallback((msg, duration = 2000) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), duration);
  }, []);

  const addLetter = useCallback((letter) => {
    if (gameState !== "playing") return;
    if (splitWord(currentGuess).length >= wordLength) return;
    setCurrentGuess(prev => prev + letter);
  }, [currentGuess, wordLength, gameState]);

  const deleteLetter = useCallback(() => {
    if (gameState !== "playing") return;
    setCurrentGuess(prev => {
      const chars = splitWord(prev);
      chars.pop();
      return chars.join("");
    });
  }, [gameState]);

  const submitGuess = useCallback(() => {
    if (gameState !== "playing") return;
    const chars = splitWord(currentGuess);

    if (chars.length < wordLength) {
      setShakeRow(true);
      showMessage("Not enough letters");
      setTimeout(() => setShakeRow(false), 600);
      return;
    }

    const target = targetData.word;
    const result = evaluateGuess(currentGuess, target);
    const newGuesses = [...guesses, currentGuess];
    const newResults = [...guessResults, result];

    setGuesses(newGuesses);
    setGuessResults(newResults);
    setCurrentGuess("");
    setRevealRow(newGuesses.length - 1);
    setKeyboardState(buildKeyboardState(newResults));

    setTimeout(() => {
      if (isWin(result)) {
        setGameState("won");
      } else if (newGuesses.length >= maxGuesses) {
        setGameState("lost");
      }
      setRevealRow(null);
    }, wordLength * 350 + 200);
  }, [currentGuess, guesses, guessResults, targetData, wordLength, maxGuesses, gameState, showMessage]);

  return {
    targetData,
    guesses,
    guessResults,
    currentGuess,
    gameState,
    keyboardState,
    shakeRow,
    revealRow,
    showHint,
    setShowHint,
    message,
    wordLength,
    maxGuesses,
    addLetter,
    deleteLetter,
    submitGuess,
    showMessage,
  };
};
