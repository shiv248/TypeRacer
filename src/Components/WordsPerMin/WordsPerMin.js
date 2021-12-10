import React, { useEffect, useMemo, useState, useRef } from "react";
const text =
  "The quick brown fox jumps over the lazy dog";
export default function WordsPerMin() {
  const [textToType] = useState(text);
  const [typedText, setTypedText] = useState("");
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [wpm, setWpm] = useState(0);
  const searchInput = useRef(null);


  const parts = useMemo(() => {
    const splitTextToType = textToType.split("");
    let endIndexMatch = 0;
    for (const [index, s] of splitTextToType.entries()) { //for loop to find what the last index of the correctly typed word is
      if (s !== typedText[index]) {
        endIndexMatch = index;
        break;
      }
    }
        return {
          matchedPart: textToType.slice(0, endIndexMatch),
          unmatchedPart: textToType.slice(endIndexMatch)
      }
  }, [typedText]); //react hook to update UI if these two variables change


  useEffect(() => {
    let interval = null;

    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  },[timerOn]);


  function handleFocus(){
    setTimeout(function () {
      searchInput.current.focus();
  }, 1);
  }

  const start = () => {
    setTimeOn(true);
    handleFocus();
  };

  const restart = () => {
    setTimeOn(false);
    setTime(0);
    setTypedText("");
    setWpm(0);
  };

  useEffect(() => {
    if (parts.matchedPart.length > 1) {
      let seconds = Math.floor((time / 1000) % 60);
      setWpm(Math.floor(textToType.split(" ").length * 60 / seconds));
    }
  }, [parts, textToType, time]);


  useEffect(() => {
    if (parts.matchedPart.length === (textToType.split("").length -1)) {
      setTimeout(function () {
        setTimeOn(false);
    }, 200);
    }
  }, [parts, textToType]);


  if (parts.unmatchedPart.length >= 0) {
    return (
      <div>
        {timerOn ? <div>Your current WPM: {wpm}</div> : null}
        <div>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
        <div>{("0" + Math.floor((time / 100) % 60)).slice(-2)}</div>
        <div>
          <b>{parts.matchedPart}</b>
          {parts.unmatchedPart}
        </div>
        {!timerOn ? <button onClick={start}>start</button> : <button onClick={restart}>restart</button>}
        {!timerOn ? <div>
          Your words per minute is {wpm}
        </div> : <input
          ref={searchInput}
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          style={{ width: "70vw", height: "300px" }}
        />}
      </div>
    );
  } else {
    return (
      null
    );
  }
}
