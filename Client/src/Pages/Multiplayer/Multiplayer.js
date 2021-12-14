import React, { useEffect, useMemo, useState, useRef } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import socketIOClient from "socket.io-client";
import WordsPerMin from '../../Components/WordsPerMin/WordsPerMin.js';
import LoadingBar from '../../Components/LoadingBar/LoadingBar.js';
import {socket} from "../../services.js";
import './Multiplayer.css';

export default function Multiplayer(props) {
  const [usersPercent, setUsersPercent] = useState(0);
  const [score, setScore] = useState(0);
  const [registeredUser, setUser] = useState("user" + getRandomInt(100));
  const [playerResponse, setPlayerResponse] = useState([]);
  const [currentPlayers, setCurrentPlayers] = useState([]);
  const [amountPlayers, setAmountPlayers] = useState(0);

  useEffect(() => {
    setUser(props.parentUser)
  }, [props]);

  useEffect(() => {
    socket.emit('joinRoom', [registeredUser, 1 ]);
  }, []);

  useEffect(() => {
    socket.on('message', (message) => {
      if(!exists(currentPlayers,message[0])){
        var temp = currentPlayers
        temp.push(message);
        setCurrentPlayers(temp);
        setAmountPlayers(temp.length)
      }else{
        var temp = currentPlayers.length
        for(var k = 0; k < temp; k++){
            if(currentPlayers[k][0] == message[0]){
                currentPlayers[k][1] = message[1];
            }
        }
      }
      console.log(currentPlayers)
    });
    socket.emit('chatMessage', usersPercent);
  }, [usersPercent]);

  function exists(arr, search) {
    return arr.some(row => row.includes(search));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    var temp = 0;
    if(currentPlayers.length > temp){
      temp = currentPlayers.length
      console.log("new player")
      console.log(currentPlayers)
      console.log(currentPlayers.length)
    }
  }, [currentPlayers]);


  function getLoadingBars(){
    let temp = []
    for(var i = 0; i < amountPlayers; i++){
      temp.push(<LoadingBar userName={currentPlayers[i][0]} loadingData={currentPlayers[i][1]}/>)
    }
    return temp;
  }

  return (
    <div className="Multiplayer">
      <Navbar fName={props.parentUser}/>
      <div className="Multiplayer-container">
        {getLoadingBars()}
        <h3> You </h3>
        <LoadingBar userName={registeredUser} loadingData={usersPercent}/>
        <WordsPerMin setScore={setScore} setUsersPercent={setUsersPercent}/>
      </div>
    </div>
  );
}
