import { useState, useCallback, useEffect, useRef } from "react";
import { LANGUAGES, getDailyWord } from "./data/languages.js";
import { evaluateGuess, buildKeyboardState, splitWord, TILE_STATES as STATES } from "./utils/gameLogic.js";

// ─── STYLES ──────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=DM+Sans:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body, #root { min-height: 100vh; background: #0d0d14; color: #f0ede8; font-family: 'DM Sans', sans-serif; }
  .app { min-height: 100vh; display: flex; flex-direction: column; align-items: center; background: #0d0d14; position: relative; overflow: hidden; }
  .bg-glow { position: fixed; pointer-events: none; z-index: 0; width: 600px; height: 600px; border-radius: 50%; filter: blur(120px); opacity: 0.12; top: -100px; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, #7c6af7 0%, #3b82f6 50%, transparent 80%); }
  .header { width: 100%; max-width: 560px; display: flex; align-items: center; justify-content: space-between; padding: 20px 16px 12px; border-bottom: 1px solid rgba(255,255,255,0.08); position: relative; z-index: 10; }
  .logo { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; color: #f0ede8; }
  .logo span { color: #7c6af7; }
  .lang-picker-btn { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; padding: 6px 14px; color: #f0ede8; cursor: pointer; font-size: 14px; font-family: 'DM Sans', sans-serif; transition: background 0.15s; }
  .lang-picker-btn:hover { background: rgba(255,255,255,0.12); }
  .lang-modal-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
  .lang-modal { background: #18181f; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 28px; width: 90%; max-width: 420px; max-height: 80vh; overflow-y: auto; }
  .lang-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  .lang-modal h2 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 700; color: #f0ede8; }
  .lang-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .lang-option { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px 14px; cursor: pointer; transition: all 0.15s; }
  .lang-option:hover { background: rgba(124,106,247,0.2); border-color: rgba(124,106,247,0.4); }
  .lang-option.active { background: rgba(124,106,247,0.25); border-color: #7c6af7; }
  .lang-option .flag { font-size: 22px; }
  .lang-option .names { display: flex; flex-direction: column; }
  .lang-option .en { font-size: 14px; font-weight: 500; color: #f0ede8; }
  .lang-option .native { font-size: 12px; color: rgba(240,237,232,0.5); }
  .close-btn { background: none; border: none; color: rgba(240,237,232,0.5); cursor: pointer; font-size: 22px; line-height: 1; padding: 0; transition: color 0.15s; }
  .close-btn:hover { color: #f0ede8; }
  .main { display: flex; flex-direction: column; align-items: center; flex: 1; width: 100%; max-width: 560px; padding: 0 16px 20px; position: relative; z-index: 5; }
  .translation-bar { display: flex; align-items: center; gap: 10px; margin: 16px 0 8px; padding: 10px 18px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 40px; font-size: 13px; color: rgba(240,237,232,0.5); width: fit-content; max-width: 100%; }
  .hint-btn { background: none; border: 1px solid rgba(240,237,232,0.2); border-radius: 20px; padding: 4px 12px; color: rgba(240,237,232,0.5); cursor: pointer; font-size: 12px; font-family: 'DM Sans', sans-serif; transition: all 0.15s; }
  .hint-btn:hover { border-color: #7c6af7; color: #7c6af7; }
  .hint-btn.active { border-color: #7c6af7; color: #7c6af7; background: rgba(124,106,247,0.1); }
  .hint-box { width: 100%; background: rgba(124,106,247,0.1); border: 1px solid rgba(124,106,247,0.3); border-radius: 12px; padding: 14px 18px; margin-bottom: 12px; font-size: 13px; }
  .hint-box .hint-text { color: rgba(240,237,232,0.8); margin-bottom: 8px; }
  .hint-box .example { font-style: italic; color: #c4baff; }
  .hint-box .example-tr { color: rgba(240,237,232,0.45); font-size: 12px; margin-top: 2px; }
  .grid { display: flex; flex-direction: column; gap: 6px; margin: 8px 0 16px; }
  .grid-row { display: flex; gap: 6px; }
  .tile { width: 58px; height: 58px; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 22px; font-weight: 500; border-radius: 6px; border: 2px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: #f0ede8; position: relative; user-select: none; }
  .tile.cjk { font-size: 26px; }
  .tile.filled { border-color: rgba(255,255,255,0.3); animation: pop 0.08s ease-out; }
  .tile.correct { background: #3d9a5e; border-color: #3d9a5e; color: #fff; animation: flipIn 0.3s ease forwards; }
  .tile.present { background: #b59a2a; border-color: #b59a2a; color: #fff; animation: flipIn 0.3s ease forwards; }
  .tile.absent { background: #333340; border-color: #333340; color: rgba(240,237,232,0.5); animation: flipIn 0.3s ease forwards; }
  @keyframes flipIn { 0% { transform: rotateX(0deg); } 50% { transform: rotateX(-90deg); } 100% { transform: rotateX(0deg); } }
  @keyframes pop { 0% { transform: scale(1); } 50% { transform: scale(1.12); } 100% { transform: scale(1); } }
  @keyframes shake { 0%,100% { transform: translateX(0); } 20%,60% { transform: translateX(-6px); } 40%,80% { transform: translateX(6px); } }
  .grid-row.shake { animation: shake 0.45s ease; }
  .keyboard { width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 6px; }
  .keyboard-row { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
  .key { height: 52px; min-width: 32px; padding: 0 8px; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; border-radius: 7px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.08); color: #f0ede8; cursor: pointer; user-select: none; transition: background 0.1s; }
  .key:active { transform: scale(0.93); }
  .key.wide { min-width: 58px; font-size: 12px; }
  .key.correct { background: #3d9a5e; border-color: #3d9a5e; }
  .key.present { background: #b59a2a; border-color: #b59a2a; }
  .key.absent { background: #262630; border-color: #262630; color: rgba(240,237,232,0.3); }
  .toast-container { position: fixed; top: 80px; left: 50%; transform: translateX(-50%); z-index: 200; pointer-events: none; }
  .toast { background: #f0ede8; color: #0d0d14; padding: 10px 22px; border-radius: 40px; font-weight: 500; font-size: 14px; animation: toastIn 0.2s ease; white-space: nowrap; }
  @keyframes toastIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  .end-panel { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 22px 24px; margin-top: 8px; text-align: center; }
  .end-panel .result-emoji { font-size: 36px; margin-bottom: 8px; }
  .end-panel h3 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 700; color: #f0ede8; margin-bottom: 4px; }
  .end-panel .answer { font-size: 13px; color: rgba(240,237,232,0.5); margin-bottom: 16px; }
  .end-panel .answer strong { color: #c4baff; }
  .end-panel .example-card { background: rgba(124,106,247,0.1); border: 1px solid rgba(124,106,247,0.25); border-radius: 10px; padding: 12px 16px; margin-bottom: 16px; text-align: left; }
  .end-panel .example-card .ex { font-style: italic; color: #c4baff; font-size: 14px; }
  .end-panel .example-card .ex-tr { color: rgba(240,237,232,0.45); font-size: 12px; margin-top: 4px; }
  .end-panel .buttons { display: flex; gap: 10px; justify-content: center; }
  .btn-primary { background: #7c6af7; color: #fff; border: none; border-radius: 24px; padding: 10px 22px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.15s; }
  .btn-primary:hover { background: #6a58e5; }
  .btn-secondary { background: rgba(255,255,255,0.08); color: #f0ede8; border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; padding: 10px 22px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.15s; }
  .btn-secondary:hover { background: rgba(255,255,255,0.14); }
`;

export default function App() {
  const [langKey, setLangKey] = useState("spanish");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [guessResults, setGuessResults] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameState, setGameState] = useState("playing");
  const [keyboardState, setKeyboardState] = useState({});
  const [shakeRow, setShakeRow] = useState(false);
  const [revealingRow, setRevealingRow] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState(null);
  const [targetData, setTargetData] = useState(null);
  const msgTimer = useRef(null);

  const lang = LANGUAGES[langKey];
  const wordLength = lang.wordLength;

  useEffect(() => {
    setTargetData(getDailyWord(lang));
    setGuesses([]); setGuessResults([]);
    setCurrentGuess(""); setGameState("playing");
    setKeyboardState({}); setRevealingRow(null);
    setShowHint(false); setMessage(null);
  }, [langKey]);

  const showMsg = useCallback((msg, dur = 1800) => {
    if (msgTimer.current) clearTimeout(msgTimer.current);
    setMessage(msg);
    msgTimer.current = setTimeout(() => setMessage(null), dur);
  }, []);

  const handleKey = useCallback((key) => {
    if (gameState !== "playing") return;
    if (key === "ENTER") {
      const chars = splitWord(currentGuess);
      if (chars.length < wordLength) { setShakeRow(true); showMsg("Not enough letters"); setTimeout(() => setShakeRow(false), 500); return; }
      const result = evaluateGuess(currentGuess, targetData.word);
      const won = result.every(r => r.state === STATES.CORRECT);
      const newGuesses = [...guesses, currentGuess];
      const newResults = [...guessResults, result];
      setGuesses(newGuesses); setGuessResults(newResults);
      setCurrentGuess(""); setRevealingRow(newGuesses.length - 1);
      setKeyboardState(buildKeyboardState(newResults));
      setTimeout(() => { setRevealingRow(null); if (won) setGameState("won"); else if (newGuesses.length >= lang.maxGuesses) setGameState("lost"); }, wordLength * 350 + 400);
    } else if (key === "⌫") {
      setCurrentGuess(prev => { const c = splitWord(prev); c.pop(); return c.join(""); });
    } else {
      if (splitWord(currentGuess).length >= wordLength) return;
      setCurrentGuess(prev => prev + key);
    }
  }, [gameState, currentGuess, wordLength, guesses, guessResults, targetData, lang.maxGuesses, showMsg]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") handleKey("ENTER");
      else if (e.key === "Backspace") handleKey("⌫");
      else if (e.key.length === 1 && /[a-zA-ZÀ-ÿ]/i.test(e.key)) handleKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKey]);

  const handleShare = () => {
    const emojiMap = { correct:"🟩", present:"🟨", absent:"⬜" };
    const header = `PolyWordle ${lang.flag} ${lang.name}\n${gameState==="won" ? guesses.length : "X"}/${lang.maxGuesses}\n\n`;
    const grid = guessResults.map(row => row.map(t => emojiMap[t.state]||"⬜").join("")).join("\n");
    if (navigator.clipboard) navigator.clipboard.writeText(header + grid).then(() => showMsg("Copied to clipboard!"));
  };

  const handleNewGame = () => {
    const words = lang.words;
    setTargetData(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]); setGuessResults([]);
    setCurrentGuess(""); setGameState("playing");
    setKeyboardState({}); setRevealingRow(null); setShowHint(false);
  };

  if (!targetData) return null;

  const rows = Array.from({ length: lang.maxGuesses }, (_, i) => {
    if (i < guesses.length) return { letters: guesses[i], results: guessResults[i], reveal: revealingRow === i };
    if (i === guesses.length && gameState === "playing") return { letters: currentGuess, results: null, current: true };
    return { letters: "", results: null };
  });

  const isCJK = wordLength <= 2;

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="bg-glow" />
        {message && <div className="toast-container"><div className="toast">{message}</div></div>}
        {showLangPicker && (
          <div className="lang-modal-overlay" onClick={() => setShowLangPicker(false)}>
            <div className="lang-modal" onClick={e => e.stopPropagation()}>
              <div className="lang-modal-header">
                <h2>Choose a language</h2>
                <button className="close-btn" onClick={() => setShowLangPicker(false)}>✕</button>
              </div>
              <div className="lang-grid">
                {Object.entries(LANGUAGES).map(([key, l]) => (
                  <div key={key} className={`lang-option${langKey === key ? " active" : ""}`}
                    onClick={() => { setLangKey(key); setShowLangPicker(false); }}>
                    <span className="flag">{l.flag}</span>
                    <div className="names"><span className="en">{l.name}</span><span className="native">{l.nativeName}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <header className="header">
          <div className="logo">Poly<span>Wordle</span></div>
          <button className="lang-picker-btn" onClick={() => setShowLangPicker(true)}>{lang.flag} {lang.name} ▾</button>
        </header>
        <main className="main">
          <div className="translation-bar">
            <span>Guess the {wordLength}-{isCJK ? "character" : "letter"} {lang.nativeName} word</span>
            <span style={{color:"rgba(240,237,232,0.2)"}}>·</span>
            <button className={`hint-btn${showHint ? " active" : ""}`} onClick={() => setShowHint(h => !h)}>{showHint ? "hide hint" : "hint"}</button>
          </div>
          {showHint && (
            <div className="hint-box">
              <div className="hint-text">💡 {targetData.hint}</div>
              <div className="example">{targetData.example}</div>
              <div className="example-tr">{targetData.exampleTranslation}</div>
            </div>
          )}
          <div className="grid">
            {rows.map((row, ri) => {
              const cells = Array.from({ length: wordLength }, (_, ci) => {
                const letter = row.letters ? splitWord(row.letters)[ci] || "" : "";
                let state = "empty";
                if (letter && !row.results) state = "filled";
                if (row.results && row.results[ci]) state = row.results[ci].state;
                const delay = row.results && row.reveal ? ci * 350 : 0;
                return (
                  <div key={ci} className={`tile${isCJK ? " cjk" : ""} ${state}`} style={delay ? {animationDelay:`${delay}ms`} : {}}>
                    {letter}
                  </div>
                );
              });
              return <div key={ri} className={`grid-row${row.current && shakeRow ? " shake" : ""}`}>{cells}</div>;
            })}
          </div>
          {gameState !== "playing" && (
            <div className="end-panel">
              <div className="result-emoji">{gameState === "won" ? "🎉" : "💡"}</div>
              <h3>{gameState === "won" ? "Nicely done!" : "Better luck next time"}</h3>
              <div className="answer">The word was <strong>{targetData.word}</strong> — <em>{targetData.translation}</em></div>
              <div className="example-card">
                <div className="ex">{targetData.example}</div>
                <div className="ex-tr">{targetData.exampleTranslation}</div>
              </div>
              <div className="buttons">
                <button className="btn-primary" onClick={handleShare}>Share result</button>
                <button className="btn-secondary" onClick={handleNewGame}>Play again</button>
              </div>
            </div>
          )}
          {gameState === "playing" && (
            <div className="keyboard">
              {lang.keyboard.map((row, ri) => (
                <div key={ri} className="keyboard-row">
                  {row.map(key => {
                    const isWide = key === "ENTER" || key === "⌫";
                    const ks = keyboardState[key.toUpperCase()] || "";
                    return <div key={key} className={`key${isWide ? " wide" : ""} ${ks}`} onClick={() => handleKey(key)}>{key}</div>;
                  })}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
