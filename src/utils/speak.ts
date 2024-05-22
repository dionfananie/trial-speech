function initUtterance(text: string) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  return utterance;
}

export default initUtterance;
