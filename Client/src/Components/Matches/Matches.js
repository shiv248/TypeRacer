import React, { useEffect, useState } from "react";
import './Matches.css';
import Match from '../Match/Match';

const axios = require('axios');

export default function Matches() {
  const [matchList, setMatchList] = useState([]);

useEffect(() => {
  axios.get('/pastMatch', {
  params: {
    user: "shiv248"
  }
})
  .then(function (response) {
    setMatchList(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}, []);

    return (
      <div className="Matches">
          <div className="title">Your Past Matches</div>
          {matchList.map((match, index) => (
            <Match key={index} matchData={match}/>
          ))}
      </div>
    );
  }
