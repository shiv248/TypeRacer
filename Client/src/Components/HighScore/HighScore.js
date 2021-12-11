import React, { useEffect, useState } from "react";
//import './highScore.css';

const axios = require('axios');

export default function HighScore() {
  const [highScoreList, setHighScoreList] = useState([]);

useEffect(() => {
  axios.get('/top')
  .then(function (response) {
    console.log(response.data);
    setHighScoreList(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}, []);

    return (
      <div className='highscores'>
        <h1>Top 10 Leaderboard (All Time)</h1>
        <div className='scores'>
          <table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>WPM</th>
            </tr>

            {highScoreList.map((person, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{person.firstName + " " + person.lastName}</td>
                <td>{person.score}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
