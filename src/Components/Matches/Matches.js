import React from 'react';
import './Matches.css';
import Match from '../Match/Match';

class Matches extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    temp = [
      { date: "11/29/2021",
        time:"7:34 pm",
        wpm:94
      },
      { date: "10/15/2021",
        time:"6:09 pm",
        wpm:101
      },
      { date: "12/6/2021",
        time:"5:22 pm",
        wpm:71
      }
    ]

    render(){
        //const data = this.state;

        let display = []
        for(let i = 0; i < Object.keys(this.temp).length;i++){
          let data2 = this.temp[i]
          display.push(
                <Match key={i} matchData={data2}/>
          )
        }

        return(
          <div className="Matches">
              <div className="title">Your Past Matches</div>
              {display}
          </div>
        )
    }
  }

export default Matches;
