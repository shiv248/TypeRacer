import React, { useEffect, useMemo, useState, useRef } from "react";
//import './highScore.css';

const axios = require('axios');

class TableMaker extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        dataList: [],
        title: []
      }
      this.createTitle = this.createTitle.bind(this);
      this.createRows = this.createRows.bind(this);
  }


  componentWillReceiveProps(props) {
    console.log(props);
    if(props.data != null){
        this.setState({
            dataList: props.data,
            title: props.title
        })
      }
    }

  createTitle(){
    let temp = []
    for(var i = 2; i < this.state.title.length; i++){
      temp.push(<th>{this.state.title[i]}</th>)
    }
    return temp;
  }

  createRows(){
    let temp = []
    let dataList = this.state.dataList
    //console.log(dataList)
    for(var i = 0; i < dataList.length; i++){
      //console.log(dataList[i])
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

  render() {
      return(
        <div className={this.state.title[0]}>
          <h1>{this.state.title[1]}</h1>
          <div className='scores'>
            <table>
              <tr>
              {this.createTitle()}
              </tr>
                {this.createRows()}
            </table>
          </div>
        </div>
      );
    }
  }

export default TableMaker;
