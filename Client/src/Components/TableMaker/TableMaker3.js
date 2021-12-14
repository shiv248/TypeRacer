import React, { useEffect, useMemo, useState, useRef } from "react";
//import './highScore.css';

const axios = require('axios');

export default function TableMaker(props) {
  const [dataList, setDataList] = useState([]);
  const [title, setTitle] = useState([]);

useMemo(() => {
  setDataList(props.asd)
  console.log(props.asd)
  setTitle(props.title)
}, [dataList,title]);

function createTitle(){
  let temp = []
  for(var i = 2; i < title.length; i++){
    temp.push(<th>{title[i]}</th>)
  }
  return temp;
}

function createRows(){
  let temp = []
  console.log(dataList)
  for(var i = 0; i < dataList.length; i++){
    console.log(dataList[i])
    temp.push(
      <tr>
        <td>{dataList[i][0]}</td>
        <td>{dataList[i][1]}</td>
        <td>{dataList[i][2]}</td>
      </tr>
    )
  }
  return temp;
}


    return (
      <div className={title[0]}>
        <h1>{title[1]}</h1>
        <div className='scores'>
          <table>
            <tr>
            {createTitle()}
            </tr>
              {createRows()}
          </table>
        </div>
      </div>
    );
  }
