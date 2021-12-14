import React, { useEffect, useMemo, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import MIME from '../../Images/Mime.png';
import TableMaker from '../../Components/TableMaker/TableMaker';
const axios = require('axios');

export default function Profile(props) {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [uName, setUserName] = useState("");
  const [topWPM, setTopWPM] = useState(null);
  const [profileMatches, setProfileMatches] = useState(null);
  const [matchResponse, setMatchResponse] = useState([]);
  const [profileMatchTitle, setProfileMatchTitle] = useState([]);

  const URLParams = useParams();
  const parts = useMemo(() => {
    getUserInfo(URLParams.id);
    setUserName(URLParams.id);
    setProfileMatchTitle(["highscores","Match History (All Time)","Match Date","Match Time","WPM"]);
  }, []);

  useEffect(() => {
    setProfileMatches(parseNameDateTime(matchResponse));
  }, [matchResponse]);

  function parseNameDateTime(data){
    if(data.length > 0){
      setFirstName(data[0].firstName);
      setLastName(data[0].lastName);
      let resultList = []
      var topScore = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].score > topScore){
          topScore = data[i].score
        }
        resultList.push([data[i].matchDate.slice(0,10), data[i].matchTime, data[i].score])
      }
      setTopWPM(topScore);
      return resultList
    }
  }

  function getUserInfo(ign){
    axios.get('/user', {
    params: {
      user: ign
    }
  })
    .then(function (response) {
      let res = response.data;
      console.log(res)
      setMatchResponse(res);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

    return (
      <div className="Profile">
        <Navbar fName={props.parentUser}/>
        <div className="Profile-container">
          <div className="display">
            <div className='profileinfo'>
              <div className='picture'>
                <img alt="Mime" src={MIME}/>
              </div>
              <div className='info'>
                <div>Name: {fName + " " + lName}</div>
                <div>IGN: {uName}</div>
                <div>Highest WPM: {topWPM}</div>
              </div>
            </div>
            <TableMaker data={profileMatches} title={profileMatchTitle}/>
          </div>
        </div>
      </div>
    );
}
