import './TopOneHundo.css';
import React, { useEffect, useMemo, useState, useRef } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import TableMaker from '../../Components/TableMaker/TableMaker';
const axios = require('axios');

export default function TopOneHundo(props) {
  const [highScoreList, setHighScoreList] = useState([]);
  const [HSTitle, setHSTitle] = useState([]);
  useMemo(() => {
    axios.get('/top')
    .then(function (response) {
      setHighScoreList(parseRankName(response.data));
      setHSTitle(["highscores","Top 10 Leaderboard (All Time)","#","Name","WPM"]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

    function parseRankName(data){
      var result = []
      for(var i = 0; i < data.length; i++){
        result.push([i+1,data[i].firstName + " " + data[i].lastName, data[i].score])
      }
      return result
    }
    console.log(highScoreList)
    return (
      <div className="Profile">
        <Navbar fName={props.parentUser}/>
        <div className="grid">
          <Matches />
          <div className="Profile-container">
            <div className="display">
              <TableMaker data={highScoreList} title={HSTitle}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
