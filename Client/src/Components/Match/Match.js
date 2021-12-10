import React from 'react';
import './Match.css';

class Match extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: this.props.matchData.date,
            time: this.props.matchData.time,
            wpm: this.props.matchData.wpm
        }
    }

    render(){
        const data = this.state;
        return(
          <div className="Match">
              <div className="container">
                  <div className="date">{data.date}</div>
                  <div className="time">{data.time}</div>
                  <div className="wpm">{data.wpm}</div>
              </div>
          </div>
        )
    }
}

export default Match;
