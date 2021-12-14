import React, { useEffect, useState } from "react";
import './Matches.css';
import Match from '../Match/Match';

const axios = require('axios');

export default function Matches(props) {
  const [fName, setFirstName] = useState(null);
  const [uName, setUName] = useState(null);
  const [matchList, setMatchList] = useState([]);
  useEffect( () => {
      console.log(props.uName)
        setUName(props.uName)
    }, [props.uName])

useEffect(() => {
  axios.get('/pastMatch', {
  params: {
    user: uName
  }
})
  .then(function (response) {
    setMatchList(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}, [uName]);
  if(uName != null){
      return (
        <div className="Matches">
            <div className="title">Your Past Matches</div>
            {matchList.map((match, index) => (
              <Match key={index} matchData={match}/>
            ))}
        </div>
      );
    }else{
      return (
        <div className="Matches">
        <div className="title">Your Past Matches</div>
        <div className="para"><p>Log in/Sign up to see your past matches!</p></div>
        </div>
      )
    }

  }
