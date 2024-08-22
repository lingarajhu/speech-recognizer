import React from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognition";

const Speech = () => {
  const {
    text,
    isListining,
    startListining,
    stopListining,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return hasRecognitionSupport ? (
    <div className="div">
      {!isListining && !text && (
        <p className="ptag">Please start to see the magic</p>
      )}
      {text ? <p className="ptag">{text}</p> : ""}
      {isListining ? <p className="ptag">Listining...</p> : ""}
      <div className="btn-div">
        <button className="start" onClick={startListining}>
          Start
        </button>
        <button className="stop" onClick={stopListining}>
          Stop
        </button>
      </div>
    </div>
  ) : (
    <h3>Your browser does not support speech recognition</h3>
  );
};

export default Speech;
