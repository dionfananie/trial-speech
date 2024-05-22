import { useState } from "react";
import initUtterance from "../utils/speak";
import sanitizeHtml from "../utils/sanitizeHtml";

const useSpeech = (text: string) => {
  const sanitized = sanitizeHtml(text);

  const [selectedItem, setSelectedItem] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const selectedSentence = sanitized[selectedItem - 1];
  const utterance = initUtterance(sanitized.join("\n"));

  const selectedWord = () => {
    if (selectedSentence) {
      const pos = charIdx;

      const left = selectedSentence.slice(0, pos + 1).search(/\S+$/);
      const right = selectedSentence.slice(pos).search(/\s/);

      if (right < 0) {
        return selectedSentence.slice(left);
      }
      return selectedSentence.slice(left, right + pos);
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
    setSelectedItem(0);
  };

  const resume = () => {
    speechSynthesis.resume();
  };

  utterance.onpause = (event) => {
    console.log("pause: ", event);
  };

  utterance.onend = () => {
    setSelectedItem(0);
  };

  utterance.onstart = (event) => {
    console.log("start: ", event);
  };

  utterance.onmark = (event) => {
    console.log("mark: ", event);
  };

  utterance.onboundary = (event) => {
    if (event.name === "sentence") {
      setSelectedItem((v) => v + 1);
    } else {
      setCharIdx(event.charIndex);
    }
  };

  return {
    speak,
    pause,
    cancel,
    resume,
    spoken: selectedSentence,
    word: selectedWord(),
  };
};

export default useSpeech;
