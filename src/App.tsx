import "./App.css";
import TextToSpeech from "./components/TextToSpeech";
import { TEXT_MESSAGE } from "./constants";
import useWordBreak from "./hooks/useWordBreak";
// import useLongestCommonPrefix from "./hooks/useLongestCommonPrefix";
import useSpeech from "./hooks/useSpeech";

function App() {
  const { speak, pause, cancel, resume, spoken, word } =
    useSpeech(TEXT_MESSAGE);
  // useLongestCommonPrefix();
  useWordBreak();
  // https://jsfiddle.net/ourcodeworld/9k0z6m14/4/
  return (
    <div>
      <TextToSpeech />
      <button onClick={speak}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={resume}>Resume</button>

      <h4>{spoken}</h4>
      <p dangerouslySetInnerHTML={{ __html: word }} />
    </div>
  );
}

export default App;
