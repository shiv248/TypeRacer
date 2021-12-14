import React, { useEffect, useMemo, useState, useRef } from "react";
import LoadingBar from '../LoadingBar/LoadingBar.js';

export default class MultiLoadingBar extends React.Component {
  const [percentage, setPercentage] = useState(0);
  const [LoadingData, setLoadingData] = useState(null);
  const [amountPlayers, setAmountPlayers] = useState(0);

  useEffect(() => {
    console.log(props.MultiLoadingData)
    setLoadingData(props.MultiLoadingData)
    setAmountPlayers(props.MultiLoadingData.length)
  },[props.MultiLoadingData]);

  function getLoadingBars(){
    if(LoadingData != null){
      let temp = []
      for(var i = 0; i < amountPlayers; i++){
        temp.push(<LoadingBar userName={LoadingData[i][0]} loadingData={LoadingData[i][1]}/>)
      }
      return temp;
    }
  }


  return(
    <div>
      {getLoadingBars()}
    </div>
  )
}
