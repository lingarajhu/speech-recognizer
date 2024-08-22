/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState<string>("");
  const [isListining, setIsListining] = useState<boolean>(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setText(event.results[0][0].transcript);
      recognition.stop();
      setIsListining(false);
    };
  }, []);

  const startListining = () => {
    setText("");
    setIsListining(true);
    recognition.start();
  };

  const stopListining = () => {
    setIsListining(false);
    recognition.stop();
  };

  return {
    text,
    isListining,
    startListining,
    stopListining,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
