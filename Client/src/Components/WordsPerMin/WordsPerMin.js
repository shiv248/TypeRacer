import React, { useEffect, useMemo, useState, useRef } from "react";
import './WordsPerMin.css';

var moment = require('moment');
const axios = require('axios');

/* https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript , https://stackoverflow.com/questions/2724509/shuffling-words-in-a-sentence-in-javascript-coding-horror-how-to-improve */
const things = ['The quick fast agile brown fox jumps over the lazy dog', "Can we pretend that airplanes in the night sky are like shootin' stars", 'Step by step Heart to heart Left right left We all fall down Like toy soldiers', "You got designer shades just to hide your face and you wear 'em around like you're cooler than me", 'But one of these things is not like the others Like a rainbow with all of the colors', "I wanna tell you but I don't know how I can't love you anymore than I do now", "You stopped loving me on the dark nights Now you won't kiss me in the sunlight"];
const chosentext = things[Math.floor(Math.random()*things.length)];
const text = chosentext.split(' ').sort(() => Math.floor(Math.random() * Math.floor(3)) - 1).join(' ');

export default function WordsPerMin() {
  const [textToType] = useState(text);
  const [typedText, setTypedText] = useState("");
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [test, setTest] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const searchInput = useRef(null);
  const [attemptReady, setAttemptReady] = useState(true);


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
    setAttemptReady(false);
    setTimeOn(true);
    handleFocus();
    setTest("");
    setGameOver(false);
  };

  const restart = () => {
    setAttemptReady(true);
    setTimeOn(false);
    setTime(0);
    setTypedText("");
    setWpm(0);
  };

  useEffect(() => {
    if (!(test.length >= (textToType.split("").length))) {
      let seconds = Math.floor((time / 1000) % 60);
      setWpm(Math.floor(textToType.split(" ").length * 60 / seconds));
      setTest(typedText);
    }
  }, [parts, textToType, time]);


  useEffect(() => {
    if(test.length === (textToType.split("").length)){
      setTimeOn(false);
      setGameOver(true);
      newScorePost();
    }

  }, [test]);

  function newScorePost(){

    axios.post('/newScore', {
      userName: 'shiv248',
      score: wpm,
      date: moment().format('MM/DD/YYYY'),
      time: moment().format('h:mm a')
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  const disablePaste = (e) => {
    e.preventDefault();
  };


  if (parts.unmatchedPart.length >= 0) {
    return (
      <div className="WPM">
        <div className="information">
          <div className="clock">
            <div className="inline">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
            <div className="inline">{("0" + Math.floor((time / 100) % 60)).slice(-2)}</div>
          </div>
          {attemptReady ? <button className="block" onClick={start}>Start</button> : <button className="block" onClick={restart}>Restart</button>}
        </div>

        <div className="display">
          <div className="text">
            <b>{parts.matchedPart}</b>
            {parts.unmatchedPart}
          </div>
        </div>

        {!timerOn ? <div className="information">
          Your words per minute is {wpm}
          </div> : <input
          onPaste={disablePaste}
          ref={searchInput}
          disabled={gameOver}
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
        />}
        {timerOn ? <div className="information">Your current WPM: {wpm}</div> : null}
        <div className="full-sentence"><i>{chosentext}</i></div>
      </div>
    );
  } else {
    return (
      null
    );
  }
}
