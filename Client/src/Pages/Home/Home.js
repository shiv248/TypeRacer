import './Home.css';
import React, { useEffect, useMemo, useState, useRef } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import WordsPerMin from '../../Components/WordsPerMin/WordsPerMin';
var moment = require('moment');
const axios = require('axios');

function Home(props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if(score > 0){
        newScorePost();
      }
      }, [score]);

    function newScorePost(){
      axios.post('/newScore', {
        userName: props.parentUser,
        score: score,
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


  return (
    <div className="Home">
      <Navbar fName={props.parentUser}/>
      <div className="grid">
        <Matches uName={props.parentUser}/>
        <div className="Home-container">
          <WordsPerMin setScore={setScore}/>
          <h1 className="website-description">Scribe(ing) one word at a time!</h1>
        </div>
      </div>

    </div>
  );
}

export default Home;
