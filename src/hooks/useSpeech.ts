import { useState } from "react";
import initUtterance from "../utils/speak";
import sanitizeHtml from "../utils/sanitizeHtml";

const useSpeech = (text: string) => {
  const sanitized = sanitizeHtml(text);

  const [selectedItem, setSelectedItem] = useState(-1);
  const [charIdx, setCharIdx] = useState(0);
  const sentence = sanitized.join(". ");
  const utterance = initUtterance(sentence);

  const selectedWord = () => {
    if (selectedItem >= 0) {
      const pos = charIdx;

      const left = sentence.slice(0, pos + 1).search(/\S+$/);
      const right = sentence.slice(pos).search(/\s/);

      if (right < 0) {
        const activeWord = sentence.slice(pos - 1);
        return sentence.replace(
          activeWord,
          `<span class="blue">${activeWord}</span>`
        );
      } else {
        const activeWord = sentence.slice(left, right + pos);

        return sentence.replace(
          activeWord,
          `<span class="blue">${activeWord}</span>`
        );
      }
    }

    return "";
  };

  const speak = () => {
    speechSynthesis.speak(utterance);
  };

  const pause = () => {
    speechSynthesis.pause();
  };

  const cancel = () => {
    speechSynthesis.cancel();
    setSelectedItem(-1);
  };

  const resume = () => {
    speechSynthesis.resume();
  };

  utterance.onpause = (event) => {
    console.log("pause: ", event);
  };

  utterance.onend = () => {
    setSelectedItem(-1);
    setCharIdx(-1);
  };

  utterance.onstart = (event) => {
    console.log("start: ", event);
  };

  utterance.onmark = (event) => {
    console.log("mark: ", event);
  };

  utterance.onboundary = (event) => {
    if (event.name !== "sentence") {
      setCharIdx(event.charIndex);
    } else setSelectedItem((v) => v + 1);
  };

  return {
    speak,
    pause,
    cancel,
    resume,
    spoken: sanitized[selectedItem],
    word: selectedWord(),
  };
};

export default useSpeech;
