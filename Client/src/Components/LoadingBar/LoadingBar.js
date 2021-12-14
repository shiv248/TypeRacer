import React, { useEffect, useMemo, useState, useRef } from "react";
import './LoadingBar.css';

export default function LoadingBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(props.loadingData)
  },[props.loadingData]);

  return(
    <div>
      <h3>{props.userName}</h3>
      <div className="LoadingBar">
          <div style={{width: percentage + "%"}} className='Percentage'>{percentage}%</div>
      </div>
    </div>
  )
}
